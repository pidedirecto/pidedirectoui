/**
 * @prettier
 */

export type UseConfirmDialog = () => (params: UseConfirmDialogProps) => Promise<boolean>;

export type UseConfirmDialogProps = {
    title?: string;
    content?: string;
    acceptButtonText?: string;
    cancelButtonText?: string;
    timeoutSeconds?: number;
    classes?: {
        acceptButton?: string;
        cancelButton?: string;
        title?: string;
        textContent?: string;
        icon?: string;
    };
    variant?: 'warning' | 'error' | 'success' | 'notification';
};
