import * as React from 'react';

export type DialogContentProps = {
    className?: string;
    children: React.ReactNode;
};

export type DialogContent = React.FunctionComponent<DialogContentProps>;
