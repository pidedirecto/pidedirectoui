/**
 * @prettier
 */
import { useRef } from 'react';
import { useConfirmDialogActions } from 'src/components/confirmDialog/confirmDialogStore';
import { UseConfirmDialogProps } from 'src/types/hooks/UseConfirmDialog';

export function useConfirmDialog() {
    const openConfirmDialog = useConfirmDialogActions((actions) => actions.openConfirmDialog);
    const clearConfirmDialog = useConfirmDialogActions((actions) => actions.clearConfirmDialog);
    const closeConfirmDialog = useConfirmDialogActions((actions) => actions.closeConfirmDialog);
    const awaitingPromiseRef = useRef<
        | {
              resolve: (result: Promise<boolean | undefined> | boolean | undefined) => void;
          }
        | undefined
    >();

    const clearConfirmDialogTimeout = setTimeout(() => {
        clearConfirmDialog();
    }, 100) as any;

    const handleOpenConfirmDialog = (options: UseConfirmDialogProps) => {
        openConfirmDialog({ ...options, onAccept: handleAccept, onCancel: handleClose });
        return new Promise<boolean | undefined>((resolve: (result: Promise<boolean | undefined> | boolean | undefined) => void, reject: (error?: any) => void) => {
            awaitingPromiseRef.current = { resolve };
        });
    };

    const handleAccept = () => {
        awaitingPromiseRef.current?.resolve(true);
        clearConfirmDialogTimeout();
    };

    const handleClose = () => {
        awaitingPromiseRef.current?.resolve(false);
        closeConfirmDialog();
        clearConfirmDialogTimeout();
    };

    return handleOpenConfirmDialog;
}
