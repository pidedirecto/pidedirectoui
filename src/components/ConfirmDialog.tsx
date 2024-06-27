/**
 * @prettier
 */
import * as React from 'react';
import { useEffect } from 'react';
import { Button } from 'src/components/Button';
import { useConfirmDialogStore } from 'src/components/confirmDialog/confirmDialogStore';
import { Dialog } from 'src/components/Dialog';
import { DialogActions } from 'src/components/DialogActions';
import { Text } from 'src/components/Text';
import { SECONDS } from 'src/constants/TimeUnit';
import { ErrorIcon } from 'src/icons/ErrorIcon';
import { NotificationIcon } from 'src/icons/NotificationIcon';
import { SuccessIcon } from 'src/icons/SuccessIcon';
import classes from 'src/styles/confirmDialog.module.css';
import { classNames } from 'src/utils/css/classNames';

export function ConfirmDialog(): React.ReactElement {
    const open = useConfirmDialogStore((state) => state.open);
    const title = useConfirmDialogStore((state) => state.title);
    const content = useConfirmDialogStore((state) => state.content);
    const acceptButtonText = useConfirmDialogStore((state) => state.acceptButtonText);
    const cancelButtonText = useConfirmDialogStore((state) => state.cancelButtonText);
    const onAccept = useConfirmDialogStore((state) => state.onAccept);
    const onCancel = useConfirmDialogStore((state) => state.onCancel);
    const variant = useConfirmDialogStore((state) => state.variant);
    const timeoutSeconds = useConfirmDialogStore((state) => state.timeoutSeconds);
    const classesProp = useConfirmDialogStore((state) => state.classes);

    // @ts-ignore
    let timeout: NodeJS.Timeout | null = null;

    useEffect(() => {
        if (timeoutSeconds) {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(
                () => {
                    timeout = null;
                    onCancel?.();
                },
                (timeoutSeconds || 5) * SECONDS,
            );
        }
    }, [open]);

    const getButtonClasses = () => {
        let buttonClasses = classes.button;

        if (variant === 'error') buttonClasses = classNames(buttonClasses, classes.errorButton, classesProp?.acceptButton);
        if (variant === 'warning') buttonClasses = classNames(buttonClasses, classes.warningButton, classesProp?.acceptButton);
        if (variant === 'success') buttonClasses = classNames(buttonClasses, classes.successButton, classesProp?.acceptButton);

        return buttonClasses;
    };

    const getVariantIcon = () => {
        if (variant === 'error') return <ErrorIcon size={90} />;
        if (variant === 'warning') return <NotificationIcon size={90} />;
        if (variant === 'success') return <SuccessIcon size={90} />;
        if (variant === 'notification') return <NotificationIcon size={90} />;

        return null;
    };

    return (
        <Dialog classes={{ dialog: classes.dialog }} open={!!open} onClose={onCancel}>
            <div className={classNames(classes.iconContainer, classesProp?.icon)}>
                {getVariantIcon()}
                {!!title && <Text className={classes.title}>{title}</Text>}
            </div>
            {!!content && (
                <div className={classes.dialogContent}>
                    <Text className={classNames(classes.message, classesProp?.textContent)}>{content}</Text>
                </div>
            )}
            <DialogActions className={classes.buttonsContainer}>
                {!!cancelButtonText && (
                    <Button variant={'secondary'} onClick={onCancel} classes={{ button: classesProp?.cancelButton }}>
                        {cancelButtonText}
                    </Button>
                )}
                <Button classes={{ button: getButtonClasses() }} onClick={onAccept}>
                    {acceptButtonText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
