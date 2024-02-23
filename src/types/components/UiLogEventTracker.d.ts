import { UiLogEvent } from "src/types/UiLogEvent";
import { ApiSauceResponse } from "src/types/ApiSauceResponse";
import * as React from "react";

export type UiLogEventTrackerProps = {
    id: string;
    onInteract: (uiLogEvent: UiLogEvent) => void | Promise<void> | ApiSauceResponse<void>,
    children: React.ReactNode
}

export type UiLogEventTracker = React.FunctionComponent<UiLogEventTrackerProps>
