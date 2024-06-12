/**
 * @prettier
 */

export type UseConfirmDialog = () => (params: UseConfirmDialogProps) => void;

export type UseConfirmDialogProps = {
    onAccept?: () => void;
    onCancel?: () => void;
    title?: string;
    content?: string;
    acceptButtonText?: string;
    cancelButtonText?: string;
    timeoutSeconds?: number;
    variant?: 'warning' | 'error' | 'success' | 'notification';
};
