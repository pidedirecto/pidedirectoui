/**
 * @prettier
 */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classes from 'src/styles/notification.module.css';
import { classNames } from 'src/utils/css/classNames';

// The alert should be only hidden and not removed in the DOM to keep the best accessibility practices
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
export function Notification({ children, secondsOpened, onClose, open, classes: classesProp }: Props): React.ReactElement {
    let timeout: number | null = null;

    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        if (open) {
            setIsOpened(true);
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(
                () => {
                    setIsOpened(false);
                    onClose?.();
                    timeout = null;
                },
                secondsOpened ?? 5 * 1000,
            ) as any;
        }
    }, [open]);

    return createPortal(
        <div role='alert' className={classNames(classes.hiddenNotification, isOpened && classNames(classes.shownNotification, classesProp?.container))}>
            {children}
        </div>,
        document.body,
    );
}

type Props = {
    secondsOpened?: number;
    open?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    classes?: {
        container?: string;
    };
};
