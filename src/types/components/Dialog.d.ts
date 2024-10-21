import * as React from 'react';

export type DialogProps = {
    open: boolean;
    loading?: boolean;
    keepMounted?: boolean;
    onClose?: Function;
    title?: React.Node;
    position?: 'right' | 'top' | 'bottom' | 'left';
    children?: React.Node;
    classes?: {
        dialogContainer?: string;
        dialog?: string;
        title?: string;
    };
};

export type Dialog = React.FunctionComponent<DialogProps>;
