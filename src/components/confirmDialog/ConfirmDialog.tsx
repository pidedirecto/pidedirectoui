/**
 * @prettier
 */
import * as React from 'react';
import { Button } from 'src/components/Button';
import { useConfirmDialogStore } from 'src/components/confirmDialog/confirmDialogStore';
import { Dialog } from 'src/components/Dialog';
import { DialogActions } from 'src/components/DialogActions';
import { Text } from 'src/components/Text';
import { ErrorIcon } from 'src/icons/ErrorIcon';
import { NotificationIcon } from 'src/icons/NotificationIcon';
import { SuccessIcon } from 'src/icons/SuccessIcon';
import classes from 'src/styles/confirmDialog.module.css';
import { classNames } from 'src/utils/css/classNames';

export function ConfirmDialog(): React.ReactElement {
    const { open, title, content, acceptButtonText, cancelButtonText, onAccept, onCancel, variant } = useConfirmDialogStore((state) => state);

    const getButtonClasses = () => {
        let buttonClasses = classes.button;

        if (variant === 'error') buttonClasses = classNames(buttonClasses, classes.errorButton);
        if (variant === 'warning') buttonClasses = classNames(buttonClasses, classes.warningButton);
        if (variant === 'success') buttonClasses = classNames(buttonClasses, classes.successButton);

        return buttonClasses;
    };

    const getVariantIcon = () => {
        if (variant === 'error') return <ErrorIcon />;
        if (variant === 'warning') return <NotificationIcon size={90} />;
        if (variant === 'success') return <SuccessIcon />;
        if (variant === 'notification') return <NotificationIcon size={90} />;

        return null;
    };

    return (
        <Dialog classes={{ dialog: classes.dialog }} open={!!open} onClose={onCancel}>
            <div className={classes.iconContainer}>
                {getVariantIcon()}
                {!!title && <Text className={classes.title}>{title}</Text>}
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
