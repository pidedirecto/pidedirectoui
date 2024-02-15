/**
 * @prettier
 */
import { pushUiInteractionLogEventToLocalStorage } from 'src/services/localStorage/logEvent/pushUiInteractionLogEventToLocalStorage';
import { UiLogEvent } from 'src/types/UiLogEvent';

/**
 * calling the api method from the service layer is against conventions,
 * but we want to avoid asynchronous api calls for Ui logEvents
 */

export function createUiInteractionLogEvent(uiLogEvent: UiLogEvent, api: Function): void {
    createUiInteractionLogEventAsynchronous({ ...uiLogEvent, occurredAt: new Date() }, api);
}

async function createUiInteractionLogEventAsynchronous(uiLogEvent: UiLogEvent, api: Function): Promise<void> {
    const response = await api(uiLogEvent);
    if (!response.ok) pushUiInteractionLogEventToLocalStorage({ ...uiLogEvent, offline: true });
}
