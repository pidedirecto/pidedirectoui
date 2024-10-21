import { useContext, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { LinearProgress } from 'src/components/LinearProgress';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes } from 'src/constants/UiLogEventType';
import { useCreateUserOpenedDialogLogEvent } from 'src/services/logEvent/useCreateUserOpenedDialogLogEvent';
import classes from 'src/styles/dialog.module.css';
import { DialogProps } from 'src/types/components/Dialog';
import { classNames } from 'src/utils/css/classNames';
import { convertReactNodeToString } from 'src/utils/react/convertReactNodeToString';

export function Dialog({ open, loading, keepMounted, onClose, title, position, children, classes: classesProp }: DialogProps): React.ReactElement {
    const createUserOpenedDialogLogEvent = useCreateUserOpenedDialogLogEvent();
    const { addElementToStackTrace } = useContext(UiLogEventTrackerContext);
    const closeDialogTimeout = useRef<number | undefined>(undefined);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        if (open) {
            if (closeDialogTimeout.current) clearTimeout(closeDialogTimeout.current);
            setIsDialogOpen(true);
        }
        if (!open) {
            closeDialogTimeout.current = setTimeout(() => {
                setIsDialogOpen(false);
                closeDialogTimeout.current = undefined;
            }, 100) as any;
        }
    }, [open]);

    useEffect(() => {
        if (isDialogOpen) {
            window.addEventListener('keydown', handleKeyDown);
            createUserOpenedDialogLogEvent(title ?? '');
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isDialogOpen]);

    const addDialogToStackTrace = () => {
        addElementToStackTrace({
            element: convertReactNodeToString(title),
            uiLogEventType: UiLogEventTypes.USER_OPENED_DIALOG,
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key !== 'Escape') return;
        onClose?.();
    };

    const handleClos = () => {
        onClose?.();
    };

    if (!isDialogOpen && !keepMounted) return <></>;

    return createPortal(
        <div
            className={classNames(classes.dialogContainer, classesProp?.dialogContainer, isDialogOpen && classes.openDialogContainer, !open && isDialogOpen && classes.closeDialogContainer)}
            onClickCapture={addDialogToStackTrace}
            style={!open && !isDialogOpen ? { visibility: 'hidden', top: '100vh' } : undefined}
            data-position={position}
        >
            <div className={classes.background} onClick={handleClos}></div>
            <div aria-modal={true} role={'dialog'} aria-labelledby='dialog-title' className={classNames(classes.dialogContent, classesProp?.dialog)} data-position={position}>
                {loading && (
                    <div className={classes.loadingContainer}>
                        <LinearProgress />
                    </div>
                )}
                {title && (
                    <h2 id={'dialog-title'} className={classNames(classes.title, classesProp?.title)}>
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </div>,
        document.body,
    );
}
