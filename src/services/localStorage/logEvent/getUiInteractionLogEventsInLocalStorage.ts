/**
 * @prettier
 */
import { UiLogEvent } from 'src/types/UiLogEvent';

export function getUiInteractionLogEventsInLocalStorage(): Array<UiLogEvent> {
    const jsonString = window.localStorage.getItem('uiInteractionLogEvents');
    return jsonString ? JSON.parse(jsonString) : [];
}
