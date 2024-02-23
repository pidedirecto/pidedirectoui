/**
 * @prettier
 */
import * as React from 'react';
import { createContext } from 'react';
import { useRef } from 'react';
import { UiLogEventType, UiLogEventTypes } from 'src/constants/UiLogEventType';
import { normalizeUiStackTrace } from 'src/services/logEvent/normalizeUiStackTrace';
import { UiLogEventTrackerProps } from 'src/types/components/UiLogEventTracker';

export function UiLogEventTracker({ id, onInteract, children }: UiLogEventTrackerProps): React.ReactElement {
    const stackTrace = useRef(id);

    const createUiLogEvent = (params: UiLogEventData) => {
        const fullStackTrace = `${stackTrace.current}/${getUiLogEventTraceId(params)}`;

        const uiLogEvent = {
            logEventType: params.uiLogEventType as UiLogEventType,
            message: getUiLogEventMessage(params),
            details: fullStackTrace,
            data: {
                label: params.element,
                pathId: fullStackTrace,
                checkBoxId: getUiLogEventTraceId(params),
            },
        };

        onInteract(uiLogEvent);
        clearStackTrace();
    };

    const addElementToStackTrace = (params: UiLogEventData) => {
        const uiLogEventTraceId = getUiLogEventTraceId(params);
        if (stackTrace.current.includes(uiLogEventTraceId)) return;

        stackTrace.current = `${stackTrace.current}/${uiLogEventTraceId}`;
    };

    const clearStackTrace = () => {
        stackTrace.current = id;
    };

    return <UiLogEventTrackerContext.Provider value={{ createUiLogEvent, addElementToStackTrace }}>{children}</UiLogEventTrackerContext.Provider>;
}

export const UiLogEventTrackerContext = createContext<UiLogEventTrackerContextState>({
    addElementToStackTrace: () => {},
    createUiLogEvent: () => {},
});

function getUiLogEventTraceId(params: UiLogEventData): string {
    switch (params.uiLogEventType) {
        case UiLogEventTypes.USER_CLICKED_CHECKBOX:
            return normalizeUiStackTrace(`checkbox_${params.element}`);
        default:
            return params.element;
    }
}

function getUiLogEventMessage(params: UiLogEventData): string {
    switch (params.uiLogEventType) {
        case UiLogEventTypes.USER_CLICKED_CHECKBOX:
            return `checkbox ${params.element} clicked`;
        default:
            return `user interacted with ${params.element}`;
    }
}

export type UiLogEventTrackerContextState = {
    addElementToStackTrace: (params: UiLogEventData) => void;
    createUiLogEvent: (params: UiLogEventData) => void;
};

type UiLogEventData = {
    element: string;
    uiLogEventType: UiLogEventType;
};
