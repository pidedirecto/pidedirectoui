import { useContext } from 'react';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes, type UiLogEventType } from 'src/constants/UiLogEventType';

export function useCreateUserToggledAccordionLogEvent(): (label: string) => Promise<void> {
    const uiLogEventTrackerContext = useContext(UiLogEventTrackerContext);

    const handleCreateUserToggledAccordionLogEvent = async (label: string) => {
        uiLogEventTrackerContext.createUiLogEvent({
            element: label,
            uiLogEventType: UiLogEventTypes.USER_TOGGLED_ACCORDION as UiLogEventType,
        });
    };

    return handleCreateUserToggledAccordionLogEvent;
}
