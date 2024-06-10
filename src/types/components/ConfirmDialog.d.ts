import * as React from "react";

export type ConfirmDialogProps = {
    open: boolean;
    onAccept?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
    title?: string;
    content?: string;
    acceptButtonText?: string;
    cancelButtonText?: string;
    classes?: {
        title?: string;
        dialog?: string;
        message?: string;
    };
    variant?: 'warning' | 'error' | 'success' | 'notification';
};

export type ConfirmDialog = React.FunctionComponent<ConfirmDialogProps>
