/**
 * @prettier
 */
import * as React from 'react';
import { createContext } from 'react';
import { SyncOfflineUiLogEvents } from 'src/components/app/SyncOfflineUiLogEvents';
import { ApiProviderProps } from 'src/types/ApiProvider';
import { ApiSauceResponse } from 'src/types/ApiSauceResponse';
import { UiLogEvent } from 'src/types/UiLogEvent';

export function ApiProvider({ children, api }: ApiProviderProps): React.ReactElement {
    return (
        <ApiContext.Provider value={{ api }}>
            <SyncOfflineUiLogEvents />
            {children}
        </ApiContext.Provider>
    );
}

export const ApiContext = createContext<ApiContextState>({
    api: {
        createUiLogEvent: undefined,
    },
});

type ApiContextState = {
    api: {
        createUiLogEvent: CreateUiLogEventFunction | undefined;
        createOfflineUiLogEvent?: CreateUiLogEventFunction;
    };
};

type CreateUiLogEventFunction = (uiLogEvent: UiLogEvent) => ApiSauceResponse<void> | Promise<void> | void;
