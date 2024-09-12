import { useEffect, useState } from 'react';
import { ApiSauceResponse, Options } from 'src/types/hooks/UseLoadApi';
import { isArray } from 'src/utils/array/isArray';
import { unzip } from 'src/utils/zip/unzip';

export function useLoadApi<S extends (request?: any) => ApiSauceResponse<any>>(
    fn: S,
    request?: Parameters<S>[0],
    options?: Options,
): [boolean, Extract<Awaited<ReturnType<S>>, { ok: true }>['data'], (params?: { request: any }) => Promise<void>] {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(options?.initialValue as any);

    useEffect(() => {
        load();
    }, getDependencies(options));

    const load = async (params?: { request: any }) => {
        if (!shouldCallApi(options?.requiredValues) || loading) return;
        setLoading(true);
        const response = await fn(params?.request ?? request);
        if (!response.ok) {
            setLoading(false);
            return options?.onError?.(response, setData);
        }
        if (options?.unZip) {
            setData(unzip(response.data));
        } else {
            setData(response.data);
        }
        setLoading(false);
    };

    return [loading, data, load];
}

function getDependencies(options?: Options): Array<any> {
    let dependencies: Array<any | undefined> = [];

    if (isArray(options?.dependencies)) {
        dependencies = dependencies.concat(options?.dependencies);
    }
    if (isArray(options?.requiredValues)) {
        dependencies = dependencies.concat(options?.requiredValues);
    }

    return dependencies;
}

function shouldCallApi(requiredValues?: Array<any>): boolean {
    return !requiredValues?.some((value: any) => value === undefined || value === null);
}
