/**
 * @prettier
 */
import * as React from 'react';
import { HTMLProps } from 'react';
import classes from 'src/styles/label.module.css';
import { classNames } from 'src/utils/css/classNames';

export function Label({ children, error, classes: classesProp, ...props }: Props): React.ReactElement {
    return (
        <label {...props} className={classNames(classes.label, classesProp?.label, error && classNames(classes.labelError, classesProp?.error))}>
            {children}
        </label>
    );
}

type Props = Omit<HTMLProps<HTMLLabelElement>, 'className'> & {
    children: React.ReactNode;
    classes?: {
        label?: string;
        error?: string;
    };
    error?: boolean;
};
