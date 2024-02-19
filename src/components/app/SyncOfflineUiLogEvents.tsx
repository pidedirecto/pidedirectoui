/**
 * @prettier
 */
import { useEffect } from 'react';
import { useContext } from 'react';
import { ApiContext } from 'src/components/app/ApiProvider';
import { useSyncOfflineUiLogEvents } from 'src/services/logEvent/useSyncOfflineUiLogEvents';

export function SyncOfflineUiLogEvents(): null {
    const [syncOfflineUiLogEvents] = useSyncOfflineUiLogEvents();
    const { api } = useContext(ApiContext);

    useEffect(() => {
        if (api.createOfflineUiLogEvent) syncOfflineUiLogEvents();
    }, [api.createOfflineUiLogEvent]);

    return null;
}
