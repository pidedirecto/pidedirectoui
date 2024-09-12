import * as React from 'react';

export type DialogActionsProps = {
    className?: string;
    children: React.ReactNode;
};

export type DialogActions = React.FunctionComponent<DialogActionsProps>;
