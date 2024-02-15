/**
 * @prettier
 */
import * as React from 'react'
import { UiLogEvent } from "src/types/UiLogEvent";

export type ApiProviderProps = {
    enableApiCallsKey: string;
    api: {
        uiLogEvent: (uiLogEvent: UiLogEvent) => Promise<void> | void
    }
    children: React.ReactElement
}

export type ApiProvider = React.FunctionComponent<ApiProviderProps>
