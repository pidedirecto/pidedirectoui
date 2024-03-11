/**
 * @prettier
 */
import { useContext } from 'react';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes, type UiLogEventType } from 'src/constants/UiLogEventType';

export function useCreateUserClickedSelectOptionLogEvent(): (label: string, option: string) => Promise<void> {
    const uiLogEventTrackerContext = useContext(UiLogEventTrackerContext);

    const handleCreateUiInteractionLogEvent = async (label: string, option: string) => {
        uiLogEventTrackerContext.createUiLogEvent({
            element: label,
            option,
            uiLogEventType: UiLogEventTypes.USER_CLICKED_SELECT_OPTION as UiLogEventType,
        });
    };

    return handleCreateUiInteractionLogEvent;
}
