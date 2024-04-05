/**
 * @prettier
 */
import { useContext } from 'react';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes, type UiLogEventType } from 'src/constants/UiLogEventType';

export function useCreateUserOpenedDialogLogEvent(): (element: string) => Promise<void> {
    const uiLogEventTrackerContext = useContext(UiLogEventTrackerContext);

    const handleCreateUserOpenedDialogLogEvent = async (element: string) => {
        uiLogEventTrackerContext.createUiLogEvent({
            element,
            uiLogEventType: UiLogEventTypes.USER_OPENED_DIALOG as UiLogEventType,
        });
    };

    return handleCreateUserOpenedDialogLogEvent;
}
