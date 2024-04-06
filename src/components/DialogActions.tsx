/**
 * @prettier
 * @flow
 */
import * as React from 'react';
import classes from 'src/styles/dialogActions.module.css';
import type { DialogActionsProps } from 'src/types/components/DialogActions';
import { classNames } from 'src/utils/css/classNames';

export function DialogActions({ children, className }: DialogActionsProps): React.ReactElement {
    return <div className={classNames(classes.container, className)}>{children}</div>;
}
