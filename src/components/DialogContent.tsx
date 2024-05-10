/**
 * @prettier
 */
import * as React from 'react';
import classes from 'src/styles/dialogContent.module.css';
import type { DialogContentProps } from 'src/types/components/DialogContent';
import { classNames } from 'src/utils/css/classNames';

export function DialogContent({ children, className }: DialogContentProps): React.ReactElement {
    return <div className={classNames(classes.container, className)}>{children}</div>;
}
