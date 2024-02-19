/**
 * @prettier
 */
import { useContext } from 'react';
import { ApiContext } from 'src/components/app/ApiProvider';
import { PageContext } from 'src/components/Page';
import { UiLogEventTypes, type UiLogEventType } from 'src/constants/UiLogEventType';
import { pushUiInteractionLogEventToLocalStorage } from 'src/services/localStorage/logEvent/pushUiInteractionLogEventToLocalStorage';
import { normalizeUiStackTrace } from 'src/services/logEvent/normalizeUiStackTrace';

export function useCreateUserClickedCheckboxLogEvent(): (label: string) => Promise<void> {
    const { api } = useContext(ApiContext);
    const pageContext = useContext(PageContext);

    const handleCreateUiInteractionLogEvent = async (label: string) => {
        if (!api.createUiLogEvent) return;

        const uiLogEvent = {
            logEventType: UiLogEventTypes.USER_CLICKED_CHECKBOX as UiLogEventType,
            message: `checkbox ${label} clicked`,
            details: `${pageContext.stackTrace}/${normalizeUiStackTrace(`checkbox_${label}`)}`,
            data: {
                label,
                pathId: `${pageContext.stackTrace}/${normalizeUiStackTrace(`checkbox_${label}`)}`,
                checkBoxId: normalizeUiStackTrace(`checkbox_${label}`),
            },
        };

        try {
            const response = await api.createUiLogEvent(uiLogEvent);
            if (!response) return;

            if (!response.ok) pushUiInteractionLogEventToLocalStorage({ ...uiLogEvent, offline: true });
        } catch (e) {
            pushUiInteractionLogEventToLocalStorage({ ...uiLogEvent, offline: true });
        }
    };

    return handleCreateUiInteractionLogEvent;
}
