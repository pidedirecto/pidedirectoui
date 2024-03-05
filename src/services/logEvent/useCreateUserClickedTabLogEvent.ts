/**
 * @prettier
 */
import { useContext } from 'react';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes, type UiLogEventType } from 'src/constants/UiLogEventType';

export function useCreateUserClickedTabLogEvent(): (label: string) => Promise<void> {
    const uiLogEventTrackerContext = useContext(UiLogEventTrackerContext);

    const handleCreateUiInteractionLogEvent = async (element: string) => {
        uiLogEventTrackerContext.createUiLogEvent({
            element: element,
            uiLogEventType: UiLogEventTypes.USER_CLICKED_TAB as UiLogEventType,
        });
    };

    return handleCreateUiInteractionLogEvent;
}
