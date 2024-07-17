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

        if (variant === 'error') buttonClasses = classNames(buttonClasses, classes.errorButton);
        if (variant === 'warning') buttonClasses = classNames(buttonClasses, classes.warningButton);
        if (variant === 'success') buttonClasses = classNames(buttonClasses, classes.successButton);

        return buttonClasses;
    };

    const getVariantIcon = () => {
        if (variant === 'error') return <ErrorIcon size={80} />;
        if (variant === 'warning') return <NotificationIcon size={80} />;
        if (variant === 'success') return <SuccessIcon size={80} />;
        if (variant === 'notification') return <NotificationIcon size={80} />;

        return null;
    };

    return (
        <Dialog classes={{ dialog: classes.dialog }} open={!!open} onClose={onCancel}>
            <div className={classes.iconContainer}>
                {getVariantIcon()}
                {!!title && (
                    <Text variant={'title'} size={'extraLarge'} className={classes.title}>
                        {title}
                    </Text>
                )}
            </div>
            {!!content && (
                <div className={classes.dialogContent}>
                    <Text className={classes.message}>{content}</Text>
                </div>
            )}
            <DialogActions className={classes.buttonsContainer}>
                {!!cancelButtonText && (
                    <Button variant={'secondary'} onClick={onCancel}>
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
