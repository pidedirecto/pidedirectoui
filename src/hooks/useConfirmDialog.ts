/**
 * @prettier
 */
import { useRef } from 'react';
import { useConfirmDialogActions } from 'src/components/confirmDialog/confirmDialogStore';
import { UseConfirmDialogProps } from 'src/types/hooks/UseConfirmDialog';

export function useConfirmDialog() {
    const openConfirmDialog = useConfirmDialogActions((actions) => actions.openConfirmDialog);
    const closeConfirmDialog = useConfirmDialogActions((actions) => actions.closeConfirmDialog);
    const clearConfirmDialog = useConfirmDialogActions((actions) => actions.clearConfirmDialog);
    const awaitingPromiseRef = useRef<
        | {
              resolve: (result: Promise<boolean | undefined> | boolean | undefined) => void;
          }
        | undefined
    >();

    const handleOpenConfirmDialog = (options: UseConfirmDialogProps) => {
        if (!options.acceptButtonText) return;

        openConfirmDialog({ ...options, onAccept: handleAccept, onCancel: handleClose, acceptButtonText: options.acceptButtonText });
        return new Promise<boolean | undefined>((resolve: (result: Promise<boolean | undefined> | boolean | undefined) => void, reject: (error?: any) => void) => {
            awaitingPromiseRef.current = { resolve };
        });
    };

    const handleAccept = async () => {
        awaitingPromiseRef.current?.resolve(true);
        closeConfirmDialog();
        setTimeout(clearConfirmDialog, 100);
    };

    const handleClose = () => {
        awaitingPromiseRef.current?.resolve(false);
        closeConfirmDialog();
        setTimeout(clearConfirmDialog, 100);
    };

    return handleOpenConfirmDialog;
}
