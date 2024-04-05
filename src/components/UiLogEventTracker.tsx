/**
 * @prettier
 */
import * as React from 'react';
import { createContext, useRef } from 'react';
import { useEffect } from 'react';
import { UiLogEventType, UiLogEventTypes } from 'src/constants/UiLogEventType';
import { normalizeUiStackTrace } from 'src/services/logEvent/normalizeUiStackTrace';
import { UiLogEventTrackerProps } from 'src/types/components/UiLogEventTracker';

export function UiLogEventTracker({ id, onInteract, children }: UiLogEventTrackerProps): React.ReactElement {
    const stackTrace = useRef(id);

    useEffect(() => {
        clearStackTrace();
    }, [id]);

    const createUiLogEvent = (params: UiLogEventData) => {
        const fullStackTrace = `${stackTrace.current}/${getUiLogEventTraceId(params)}`;

        const uiLogEvent = {
            logEventType: params.uiLogEventType as UiLogEventType,
            message: getUiLogEventMessage(params),
            details: fullStackTrace,
            data: createUiLogEventData({
                uiLogEvent: params,
                stackTrace: fullStackTrace,
                elementId: getUiLogEventTraceId(params),
            }),
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
        case UiLogEventTypes.USER_CLICKED_SWITCH:
            return normalizeUiStackTrace(`switch_${params.element}`);
        case UiLogEventTypes.USER_CLICKED_BUTTON:
            return normalizeUiStackTrace(`button_${params.element}`);
        case UiLogEventTypes.USER_CLICKED_TAB:
            return normalizeUiStackTrace(`tab_${params.element}`);
        case UiLogEventTypes.USER_TOGGLED_ACCORDION:
            return normalizeUiStackTrace(`accordion_${params.element}`);
        case UiLogEventTypes.USER_CLICKED_SELECT_OPTION:
            return normalizeUiStackTrace(`select_${params.element}`);
        case UiLogEventTypes.USER_TYPED_INPUT:
            return normalizeUiStackTrace(`input_${params.element}`);
        case UiLogEventTypes.USER_CLICKED_TABLE:
            return normalizeUiStackTrace('table');
        case UiLogEventTypes.USER_OPENED_DIALOG:
            return normalizeUiStackTrace(`dialog_${params.element}`);
        default:
            return params.element;
    }
}

function getUiLogEventMessage(params: UiLogEventData): string {
    switch (params.uiLogEventType) {
        case UiLogEventTypes.USER_CLICKED_CHECKBOX:
            return `checkbox ${params.element} clicked`;
        case UiLogEventTypes.USER_CLICKED_SWITCH:
            return `switch ${params.element} clicked`;
        case UiLogEventTypes.USER_CLICKED_BUTTON:
            return `button ${params.element} clicked`;
        case UiLogEventTypes.USER_CLICKED_TAB:
            return `tab ${params.element} clicked`;
        case UiLogEventTypes.USER_TOGGLED_ACCORDION:
            return `accordion ${params.element} toggled`;
        case UiLogEventTypes.USER_CLICKED_SELECT_OPTION:
            return `select ${params.element} changed with value ${params.value}`;
        case UiLogEventTypes.USER_TYPED_INPUT:
            return `input ${params.element} typed with value ${params.value}`;
        case UiLogEventTypes.USER_OPENED_DIALOG:
            return `dialog ${params.element} opened`;
        default:
            return `user interacted with ${params.element}`;
    }
}

function createUiLogEventData(params: CreateUiLogEventDataParams): Object {
    switch (params.uiLogEvent.uiLogEventType) {
        case UiLogEventTypes.USER_CLICKED_CHECKBOX:
            return {
                label: params.uiLogEvent.element,
                pathId: params.stackTrace,
                stacktrace: params.stackTrace.replace(params.elementId, ''),
                checkBoxId: params.elementId,
            };
        case UiLogEventTypes.USER_CLICKED_SWITCH:
            return {
                pathId: params.stackTrace,
                stacktrace: params.stackTrace.replace(params.elementId, ''),
                switchId: params.elementId,
            };
        case UiLogEventTypes.USER_CLICKED_BUTTON:
            return {
                buttonName: params.uiLogEvent.element,
                pathId: params.stackTrace,
                stacktrace: params.stackTrace.replace(params.elementId, ''),
                buttonId: params.elementId,
            };
        case UiLogEventTypes.USER_CLICKED_TAB:
            return {
                tabId: params.elementId,
                pathId: params.stackTrace,
            };
        case UiLogEventTypes.USER_TOGGLED_ACCORDION:
            return {
                title: params.uiLogEvent.element,
                accordionId: params.elementId,
                pathId: params.stackTrace,
            };
        case UiLogEventTypes.USER_CLICKED_SELECT_OPTION:
            return {
                selectedValue: params.uiLogEvent.value,
                selectId: params.elementId,
                pathId: params.stackTrace,
            };
        case UiLogEventTypes.USER_TYPED_INPUT:
            return {
                valueMessage: params.uiLogEvent.value,
                inputId: params.elementId,
                pathId: params.stackTrace,
            };
        case UiLogEventTypes.USER_OPENED_DIALOG:
            return {
                title: params.uiLogEvent.element,
                dialogId: params.elementId,
                stacktrace: params.stackTrace.replace(params.elementId, ''),
                pathId: params.stackTrace,
            };
        default:
            return {
                label: params.uiLogEvent.element,
                stacktrace: params.stackTrace.replace(params.elementId, ''),
                pathId: params.stackTrace,
            };
    }
}

export type UiLogEventTrackerContextState = {
    addElementToStackTrace: (params: UiLogEventData) => void;
    createUiLogEvent: (params: UiLogEventData) => void;
};

type UiLogEventData = {
    element: string;
    value?: string;
    uiLogEventType: UiLogEventType;
};

type CreateUiLogEventDataParams = {
    uiLogEvent: UiLogEventData;
    stackTrace: string;
    elementId: string;
};
