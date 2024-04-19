/**
 * @prettier
 */
import { Notification } from 'src/types/Notification';

export type UseNotification = () => (notification: Notification) => void;
