/**
 * @prettier
 */
import { useContext } from 'react';
import { ApiContext } from 'src/components/app/ApiProvider';
import { PageContext } from 'src/components/Page';
import { LogEventTypes } from 'src/constants/LogEventType';
import { createUiInteractionLogEvent } from 'src/services/logEvent/createUiInteractionLogEvent';
import { normalizeUiStackTrace } from 'src/services/logEvent/normalizeUiStackTrace';

export function useCreateUserClickedCheckboxLogEvent(): (label: string) => void {
    const { api } = useContext(ApiContext);
    const pageContext = useContext(PageContext);

    const handleCreateUiInteractionLogEvent = (label: string) => {
        createUiInteractionLogEvent(
            {
                logEventType: LogEventTypes.USER_CLICKED_CHECKBOX,
                message: `checkbox ${label} clicked`,
                details: `${pageContext.stackTrace}/${normalizeUiStackTrace(`checkbox_${label}`)}`,
                data: {
                    label,
                    pathId: `${pageContext.stackTrace}/${normalizeUiStackTrace(`checkbox_${label}`)}`,
                    checkBoxId: normalizeUiStackTrace(`checkbox_${label}`),
                },
            },
            api.uiLogEvent,
        );
    };

    return handleCreateUiInteractionLogEvent;
}
