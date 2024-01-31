/**
 * @prettier
 */
import * as React from 'react';
import { HTMLProps } from 'react';
import classes from 'src/styles/label.module.css';
import { classNames } from 'src/utils/css/classNames';

export function Label({ children, className, ...props }: Props): React.ReactElement {
    return (
        <label {...props} className={classNames(classes.label, className)}>
            {children}
        </label>
    );
}

type Props = HTMLProps<HTMLLabelElement> & {
    children: React.ReactNode;
};
