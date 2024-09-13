import * as React from 'react';
import { HTMLProps } from 'react';
import classes from 'src/styles/label.module.css';
import { classNames } from 'src/utils/css/classNames';

export function Label({ children, error, variant, classes: classesProp, ...props }: Props): React.ReactElement {
    if (variant === 'legend') {
        return (
            <legend {...props} className={classNames(classes.label, classesProp?.label, error && classNames(classes.labelError, classesProp?.error))}>
                {children}
            </legend>
        );
    }

    return (
        <label {...props} className={classNames(classes.label, classesProp?.label, error && classNames(classes.labelError, classesProp?.error))}>
            {children}
        </label>
    );
}

type Props = Omit<HTMLProps<HTMLLabelElement>, 'className'> &
    Omit<HTMLProps<HTMLLegendElement>, 'className'> & {
        children: React.ReactNode;
        variant?: 'legend';
        classes?: {
            label?: string;
            error?: string;
        };
        error?: boolean;
    };
