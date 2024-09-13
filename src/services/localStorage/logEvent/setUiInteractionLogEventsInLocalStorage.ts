import { UiLogEvent } from 'src/types/UiLogEvent';

export function setUiInteractionLogEventsInLocalStorage(uiLogEvents: Array<UiLogEvent>): void {
    window.localStorage.setItem('uiInteractionLogEvents', JSON.stringify(uiLogEvents));
}
