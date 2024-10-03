import moment from 'moment';
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
    const lastTimeFetched = useSuspenseStore((store) => store.suspenseApiStates.get(fn)?.lastTimeFetched);

    const [responseTrigger, setResponseTrigger] = useState(false);

    const addApi = useSuspenseActions((actions) => actions.addApi);
    const startFetchApi = useSuspenseActions((actions) => actions.startFetchApi);
    const endFetchApi = useSuspenseActions((actions) => actions.endFetchApi);
    const removeApi = useSuspenseActions((actions) => actions.removeApi);

    useEffect(() => {
        return () => {
            if (!isResponseStillCached()) removeApi(fn, options?.key);
        };
    }, []);

    const load = async (params?: { request: any }) => {
        addApi(fn, options?.cache, options?.key);
        if (!shouldCallApi(options?.requiredValues) || loading) return;
        if (isResponseStillCached()) {
            setResponseTrigger(!responseTrigger);
            return;
        }

        startFetchApi(fn, options?.key);
        const response = await fn(params?.request ?? request);

        if (!response.ok) {
            return options?.onError?.(response, handleApiError);
        }

        const apiData = options?.unZip ? unzip(response.data) : response.data;
        endFetchApi(fn, apiData, options?.key);
        setResponseTrigger(!responseTrigger);
    };

    const isResponseStillCached = () => {
        if (!options?.cache) return false;
        if (!lastTimeFetched) return false;
        return moment(lastTimeFetched).add(options.cache, 'milliseconds').isAfter(new Date());
    };

    const handleApiError = (data: Extract<Awaited<ReturnType<S>>, { ok: true }>['data']) => {
        endFetchApi(fn, data, options?.key);
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
        addApi(state, api, cache, key) {
            if (state.suspenseApiStates.has(key ?? api)) {
                if (!cache) return;

                const previousSuspenseApiState = state.suspenseApiStates.get(key ?? api);
                if (moment(previousSuspenseApiState?.lastTimeFetched).add(cache, 'milliseconds').isAfter(new Date())) {
                    return;
                }
            }
            state.suspenseApiStates.set(key ?? api, { hasInitialFetched: false, loading: false });
        },
        removeApi(state, api, key) {
            state.suspenseApiStates.delete(key ?? api);
        },
        startFetchApi(state, api, key) {
            state.suspenseApiStates.set(key ?? api, { hasInitialFetched: true, loading: true });
        },
        endFetchApi(state, api, data, key) {
            const previousSuspenseApiState = state.suspenseApiStates.get(key ?? api);
            if (!previousSuspenseApiState) return;
            state.suspenseApiStates.set(key ?? api, { ...previousSuspenseApiState, loading: false, data, lastTimeFetched: new Date() });
        },
    },
});

type Store = {
    suspenseApiStates: Map<Function | string, ApiState>;
};

type Actions = {
    addApi: (api: Function, cache?: number, key?: string) => void;
    removeApi: (api: Function, key?: string) => void;
    startFetchApi: (api: Function, key?: string) => void;
    endFetchApi: (api: Function, data: any, key?: string) => void;
};

type ApiState = {
    hasInitialFetched: boolean;
    loading: boolean;
    data?: any;
    request?: any;
    lastTimeFetched?: Date;
};
