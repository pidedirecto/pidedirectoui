/**
 * @prettier
 */
import React, { useEffect } from 'react';
import { useConfirmDialogActions, useConfirmDialogStore } from 'src/components/confirmDialog/confirmDialogStore';
import { SECONDS } from 'src/constants/TimeUnit';
import { UseConfirmDialogProps } from 'src/types/hooks/useConfirmDialog';

export function useConfirmDialog() {
    const confirmDialogState = useConfirmDialogStore((state) => state);
    const openConfirmDialog = useConfirmDialogActions((actions) => actions.openConfirmDialog);
    const clearConfirmDialog = useConfirmDialogActions((actions) => actions.clearConfirmDialog);
    const awaitingPromiseRef = React.useRef<
        | {
              resolve: (result: Promise<boolean | undefined> | boolean | undefined) => void;
          }
        | undefined
    >();
    let timeout: NodeJS.Timeout | null = null;

    useEffect(() => {
        if (Boolean(confirmDialogState) && confirmDialogState?.timeoutSeconds) {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(
                () => {
                    timeout = null;
                    handleClose();
                },
                (confirmDialogState?.timeoutSeconds || 5) * SECONDS,
            );
        }
    }, [confirmDialogState]);

    const handleOpenConfirmDialog = (options: UseConfirmDialogProps) => {
        openConfirmDialog({ ...options, onAccept: handleAccept, onCancel: handleClose });
        return new Promise<boolean | undefined>((resolve: (result: Promise<boolean | undefined> | boolean | undefined) => void, reject: (error?: any) => void) => {
            awaitingPromiseRef.current = { resolve };
        });
    };

    const handleAccept = () => {
        awaitingPromiseRef.current?.resolve(true);
        clearConfirmDialog();
    };

    const handleClose = () => {
        awaitingPromiseRef.current?.resolve(false);
        clearConfirmDialog();
    };

    return handleOpenConfirmDialog;
}
