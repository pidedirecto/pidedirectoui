/**
 * @prettier
 */
import { useContext, useRef } from 'react';
import { ApiContext } from 'src/components/app/ApiProvider';
import { SECONDS } from 'src/constants/TimeUnit';
import { getUiInteractionLogEventsInLocalStorage } from 'src/services/localStorage/logEvent/getUiInteractionLogEventsInLocalStorage';
import { setUiInteractionLogEventsInLocalStorage } from 'src/services/localStorage/logEvent/setUiInteractionLogEventsInLocalStorage';
import { wait } from 'src/utils/wait';
import { isTabHidden } from 'src/utils/window/isTabHidden';

export function useSyncOfflineUiLogEvents(): [Function] {
    const secondsToSyncOfflineUiLogEvents = 6 * SECONDS;

    const { api } = useContext(ApiContext);

    const hasAlreadyStartedSyncing = useRef(false);

    const handleSyncUiLogEvents = () => {
        if (hasAlreadyStartedSyncing.current) return;
        hasAlreadyStartedSyncing.current = true;

        syncUiLogEvents();
    };

    const syncUiLogEvents = async () => {
        await wait(secondsToSyncOfflineUiLogEvents);
        if (isTabHidden()) {
            syncUiLogEvents();
            return;
        }
        await Promise.all([syncUiInteractionLogEvents()]);

        syncUiLogEvents();
    };

    const syncUiInteractionLogEvents = async () => {
        if (!api.createOfflineUiLogEvent) return;

        const uiLogEvents = getUiInteractionLogEventsInLocalStorage();
        if (!uiLogEvents.length) return;

        const uiLogEvent = uiLogEvents.pop();
        if (!uiLogEvent) return;

        const response = await api.createOfflineUiLogEvent(uiLogEvent);
        if (!response) return;

        // In case SERVER_ERROR let's ignore, since logEvents can get stuck
        if (response.ok || response.problem === 'SERVER_ERROR') setUiInteractionLogEventsInLocalStorage(uiLogEvents);
    };

    return [handleSyncUiLogEvents];
}
