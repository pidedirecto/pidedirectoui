/**
 * @prettier
 */
import { useNotificationsActions } from 'src/components/Notifications';

export function useNotification() {
    const addNotification = useNotificationsActions((actions) => actions.addNotification);

    return addNotification;
}
