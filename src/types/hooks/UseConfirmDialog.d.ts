/**
 * @prettier
 */

export type UseConfirmDialog = () => (params: UseConfirmDialogProps) => Promise<boolean>;

export type UseConfirmDialogProps = {
    onAccept: (() => void) | undefined;
    onCancel: (() => void) | undefined;
    title?: string;
    content?: string;
    acceptButtonText?: string;
    cancelButtonText?: string;
    timeoutSeconds?: number;
    variant?: 'warning' | 'error' | 'success' | 'notification';
};
