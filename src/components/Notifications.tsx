import * as React from 'react';
import { memo } from 'react';
import { Notification } from 'src/components/Notification';
import { createStore } from 'src/hooks/createStore';
import type { Notification as NotificationType } from 'src/types/Notification';
import { newId } from 'src/utils/string/newId';

export const Notifications = memo(function (): React.ReactElement {
    const notifications = useNotificationsStore((state) => state.notifications);

    const removeNotification = useNotificationsActions((actions) => actions.removeNotification);

    const handleRemoveNotification = (notification: NotificationType) => {
        setTimeout(() => {
            removeNotification(notification);
        }, 1000);
    };

    return (
        <>
            {notifications.map((notification, idx) => (
                <Notification key={notification.message + idx} open={true} secondsOpened={notification.timeOpened} onClose={() => handleRemoveNotification(notification)}>
                    {notification.message}
                </Notification>
            ))}
        </>
    );
});

export const [useNotificationsStore, useNotificationsActions] = createStore<State, Actions>({
    initialState: {
        notifications: [],
    },
    actions: {
        addNotification: (state, notification) => {
            state.notifications.push({ ...notification, notificationId: newId() });
        },

        removeNotification: (state, notification) => {
            state.notifications = state.notifications.filter((activeNotification) => activeNotification.notificationId !== notification.notificationId);
        },
    },
});

type State = {
    notifications: Array<NotificationType>;
};

type Actions = {
    addNotification: (notification: { message: string; timeOpened?: number }) => void;
    removeNotification: (notification: NotificationType) => void;
};
