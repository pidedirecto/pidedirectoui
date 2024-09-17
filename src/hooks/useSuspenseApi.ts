import { useEffect, useState } from 'react';
import { createStore } from 'src/hooks/createStore';
import { ApiSauceResponse, Options } from 'src/types/hooks/UseSuspenseApi';
import { unzip } from 'src/utils/zip/unzip';

export function useSuspenseApi<S extends (request?: any) => ApiSauceResponse<any>>(
    fn: S,
    request?: Parameters<S>[0],
    options?: Options,
): [Extract<Awaited<ReturnType<S>>, { ok: true }>['data'], (params?: { request: any }) => Promise<void>] {
    const hasInitialFetched = useSuspenseStore((store) => !!store.suspenseApiStates.get(fn)?.hasInitialFetched);
    const loading = useSuspenseStore((store) => !!store.suspenseApiStates.get(fn)?.loading);
    const data = useSuspenseStore((store) => store.suspenseApiStates.get(fn)?.data);

    const [responseTrigger, setResponseTrigger] = useState(false);

    const addApi = useSuspenseActions((actions) => actions.addApi);
    const startFetchApi = useSuspenseActions((actions) => actions.startFetchApi);
    const endFetchApi = useSuspenseActions((actions) => actions.endFetchApi);
    const removeApi = useSuspenseActions((actions) => actions.removeApi);

    useEffect(() => {
        return () => {
            removeApi(fn);
        };
    }, []);

    const load = async (params?: { request: any }) => {
        addApi(fn);
        if (!shouldCallApi(options?.requiredValues) || loading) return;
        startFetchApi(fn);
        const response = await fn(params?.request ?? request);

        if (!response.ok) {
            return options?.onError?.(response, handleApiError);
        }

        const apiData = options?.unZip ? unzip(response.data) : response.data;
        endFetchApi(fn, apiData);
        setResponseTrigger(!responseTrigger);
    };

    const handleApiError = (data: Extract<Awaited<ReturnType<S>>, { ok: true }>['data']) => {
        endFetchApi(fn, data);
    };

    if (shouldCallApi(options?.requiredValues) && (!hasInitialFetched || loading)) {
        throw load();
    }

    return [data, load];
}

function shouldCallApi(requiredValues?: Array<any>): boolean {
    return !requiredValues?.some((value: any) => value === undefined || value === null);
}

const [useSuspenseStore, useSuspenseActions] = createStore<Store, Actions>({
    initialState: {
        suspenseApiStates: new Map(),
    },
    actions: {
        addApi(state, api) {
            if (state.suspenseApiStates.has(api)) return;
            state.suspenseApiStates.set(api, { hasInitialFetched: false, loading: false });
        },
        removeApi(state, api) {
            state.suspenseApiStates.delete(api);
        },
        startFetchApi(state, api) {
            state.suspenseApiStates.set(api, { hasInitialFetched: true, loading: true });
        },
        endFetchApi(state, api, data) {
            const previousSuspenseApiState = state.suspenseApiStates.get(api);
            if (!previousSuspenseApiState) return;
            state.suspenseApiStates.set(api, { ...previousSuspenseApiState, loading: false, data });
        },
    },
});

type Store = {
    suspenseApiStates: Map<Function, ApiState>;
};

type Actions = {
    addApi: (api: Function) => void;
    removeApi: (api: Function) => void;
    startFetchApi: (api: Function) => void;
    endFetchApi: (api: Function, data: any) => void;
};

type ApiState = {
    hasInitialFetched: boolean;
    loading: boolean;
    data?: any;
};
