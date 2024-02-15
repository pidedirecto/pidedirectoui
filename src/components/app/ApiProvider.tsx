/**
 * @prettier
 */
import * as React from 'react';
import { createContext, useEffect, useState } from 'react';
import { enablePideDirectoUiApiCallsApi } from 'src/api/pidedirectoui/enablePideDirectoUiApiCallsApi';
import { ApiProviderProps } from 'src/types/ApiProvider';
import { UiLogEvent } from 'src/types/UiLogEvent';

export function ApiProvider({ children, enableApiCallsKey, api }: ApiProviderProps): React.ReactElement {
    const [apiCallsEnabled, setApiCallsEnabled] = useState(false);

    useEffect(() => {
        enableApiCalls();
    }, [enableApiCallsKey]);

    const enableApiCalls = async () => {
        if (!enableApiCallsKey) {
            console.error(`ApiProvider requires a enableApiCallsKey but got enableApiCallsKey=${enableApiCallsKey}`);
            return;
        }

        const response = await enablePideDirectoUiApiCallsApi({ enableApiCallsKey });
        if (!response.ok) {
            console.error(`There was an error enabling api calls for @pidedirecto/ui e=${(response.data as any)?.message ?? response.problem}`);
        }

        if (!response.data) {
            console.warn('Api calls for @pidedirecto/ui were not enabled');
        }

        setApiCallsEnabled(response.data);
    };

    return <ApiContext.Provider value={{ apiCallsEnabled, api }}>{children}</ApiContext.Provider>;
}

export const ApiContext = createContext<ApiContextState>({
    apiCallsEnabled: false,
    api: {
        uiLogEvent: () => {},
    },
});

type ApiContextState = {
    apiCallsEnabled: boolean;
    api: {
        uiLogEvent: (uiLogEvent: UiLogEvent) => Promise<void> | void;
    };
};
