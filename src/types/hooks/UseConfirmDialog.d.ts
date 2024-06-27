/**
 * @prettier
 */

export type UseConfirmDialog = () => (params: UseConfirmDialogProps) => Promise<boolean>;

export type UseConfirmDialogProps = {
    title?: string;
    content?: string;
    acceptButtonText: string;
    cancelButtonText?: string;
    timeoutSeconds?: number;
    variant?: 'warning' | 'error' | 'success' | 'notification';
};
