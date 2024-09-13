import { useContext } from 'react';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes, type UiLogEventType } from 'src/constants/UiLogEventType';

export function useCreateUserClickedRadioLogEvent(): (label: string) => Promise<void> {
    const uiLogEventTrackerContext = useContext(UiLogEventTrackerContext);

    const handleCreateUiInteractionLogEvent = async (label: string) => {
        uiLogEventTrackerContext.createUiLogEvent({
            element: label,
            uiLogEventType: UiLogEventTypes.USER_CLICKED_CHECKBOX as UiLogEventType,
        });
    };

    return handleCreateUiInteractionLogEvent;
}
