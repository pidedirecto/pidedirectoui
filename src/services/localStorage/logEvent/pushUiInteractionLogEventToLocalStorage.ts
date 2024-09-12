import { getUiInteractionLogEventsInLocalStorage } from 'src/services/localStorage/logEvent/getUiInteractionLogEventsInLocalStorage';
import { setUiInteractionLogEventsInLocalStorage } from 'src/services/localStorage/logEvent/setUiInteractionLogEventsInLocalStorage';
import { UiLogEvent } from 'src/types/UiLogEvent';

export function pushUiInteractionLogEventToLocalStorage(uiLogEvent: UiLogEvent): void {
    const uiLogEvents = getUiInteractionLogEventsInLocalStorage();
    uiLogEvents.push(uiLogEvent);
    if (uiLogEvents.length > 10000) {
        setUiInteractionLogEventsInLocalStorage(uiLogEvents.slice(1));
        return;
    }
    setUiInteractionLogEventsInLocalStorage(uiLogEvents);
}
