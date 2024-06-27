/**
 * @prettier
 */
import { createStore } from 'src/hooks/createStore';

export const [useConfirmDialogStore, useConfirmDialogActions] = createStore<State, Actions>({
    initialState: {
        open: false,
        onAccept: undefined,
        onCancel: undefined,
    },
    actions: {
        openConfirmDialog: (state, dialog) => {
            state.open = true;
            state.title = dialog.title;
            state.content = dialog.content;
            state.variant = dialog.variant;
            state.acceptButtonText = dialog.acceptButtonText;
            state.cancelButtonText = dialog.cancelButtonText;
            state.timeoutSeconds = dialog.timeoutSeconds;
            state.onAccept = dialog.onAccept;
            state.onCancel = dialog.onCancel;
        },
        clearConfirmDialog: (state) => {
            state.open = false;
            state.title = undefined;
            state.content = undefined;
            state.variant = undefined;
            state.acceptButtonText = undefined;
            state.cancelButtonText = undefined;
            state.timeoutSeconds = undefined;
            state.onAccept = undefined;
        },
    },
});

type State = {
    open: boolean;
    onAccept: (() => void) | undefined;
    onCancel: (() => void) | undefined;
    title?: string;
    content?: string;
    acceptButtonText?: string;
    cancelButtonText?: string;
    timeoutSeconds?: number;
    variant?: 'warning' | 'error' | 'success' | 'notification';
};

type OpenConfirmDialogParams = {
    onAccept: (() => void) | undefined;
    onCancel: (() => void) | undefined;
    title?: string;
    content?: string;
    acceptButtonText: string;
    cancelButtonText?: string;
    timeoutSeconds?: number;
    variant?: 'warning' | 'error' | 'success' | 'notification';
};

type Actions = {
    openConfirmDialog: (dialog: OpenConfirmDialogParams) => void;
    clearConfirmDialog: () => void;
};
