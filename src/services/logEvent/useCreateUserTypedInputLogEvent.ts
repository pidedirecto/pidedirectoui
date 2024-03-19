/**
 * @prettier
 */
import { useContext } from 'react';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes, type UiLogEventType } from 'src/constants/UiLogEventType';

export function useCreateUserTypedInputLogEvent(): (label: string, value: string) => Promise<void> {
    const uiLogEventTrackerContext = useContext(UiLogEventTrackerContext);

    const handleCreateUiInteractionLogEvent = async (label: string, value: string) => {
        uiLogEventTrackerContext.createUiLogEvent({
            element: label,
            value: value,
            uiLogEventType: UiLogEventTypes.USER_TYPED_INPUT as UiLogEventType,
        });
    };

    return handleCreateUiInteractionLogEvent;
}
