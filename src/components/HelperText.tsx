import * as React from 'react';
import { HTMLProps } from 'react';
import classes from 'src/styles/helperText.module.css';
import { classNames } from 'src/utils/css/classNames';

export function HelperText({ children, classes: classesProp, error, ...props }: Props): React.ReactElement {
    return (
        <span {...props} className={classNames(classes.text, classesProp?.helperText, error && classNames(classes.textError, classesProp?.error))}>
            {children}
        </span>
    );
}

type Props = Omit<HTMLProps<HTMLSpanElement>, 'className'> & {
    children: React.ReactNode;
    error?: boolean;
    classes?: {
        helperText?: string;
        error?: string;
    };
};
