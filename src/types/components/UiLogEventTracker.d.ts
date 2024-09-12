import * as React from 'react';
import { ApiSauceResponse } from 'src/types/ApiSauceResponse';
import { UiLogEvent } from 'src/types/UiLogEvent';

export type UiLogEventTrackerProps = {
    id: string;
    onInteract: (uiLogEvent: UiLogEvent) => void | Promise<void> | ApiSauceResponse<void>;
    children: React.ReactNode;
};

export type UiLogEventTracker = React.FunctionComponent<UiLogEventTrackerProps>;
