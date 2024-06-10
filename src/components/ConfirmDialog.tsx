/**
 * @prettier
 */
import * as React from 'react';
import { Button } from 'src/components/Button';
import { Dialog } from 'src/components/Dialog';
import { DialogActions } from 'src/components/DialogActions';
import { Text } from 'src/components/Text';
import { ErrorIcon } from 'src/icons/ErrorIcon';
import { NotificationIcon } from 'src/icons/NotificationIcon';
import { SuccessIcon } from 'src/icons/SuccessIcon';
import { WarningIcon } from 'src/icons/WarningIcon';
import classes from 'src/styles/confirmDialog.module.css';
import { ConfirmDialogProps } from 'src/types/components/ConfirmDialog';
import { classNames } from 'src/utils/css/classNames';

export function ConfirmDialog({ open, title, content, acceptButtonText, cancelButtonText, onAccept, onClose, variant, classes: classesProp }: ConfirmDialogProps): React.ReactElement {
    const getButtonClasses = () => {
        let buttonClasses = classes.button;

        if (variant === 'error') buttonClasses = classNames(buttonClasses, classes.errorButton);
        if (variant === 'warning') buttonClasses = classNames(buttonClasses, classes.warningButton);
        if (variant === 'success') buttonClasses = classNames(buttonClasses, classes.successButton);

        return buttonClasses;
    };

    const getVariantIcon = () => {
        if (variant === 'error') return <ErrorIcon />;
        if (variant === 'warning') return <WarningIcon size={90} />;
        if (variant === 'success') return <SuccessIcon />;
        if (variant === 'notification') return <NotificationIcon size={90} />;

        return null;
    };

    return (
        <Dialog classes={{ dialog: classNames(classes.dialog, classesProp?.dialog) }} open={open} onClose={onClose}>
            <div className={classes.iconContainer}>
                {getVariantIcon()}
                {!!title && <Text className={classNames(classesProp?.title, classes.title)}>{title}</Text>}
            </div>
            {!!content && (
                <div className={classes.dialogContent}>
                    <Text className={classNames(classesProp?.message, classes.message)}>{content}</Text>
                </div>
            )}
            <DialogActions className={classes.buttonsContainer}>
                {!!cancelButtonText && (
                    <Button variant={'secondary'} onClick={onClose}>
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
