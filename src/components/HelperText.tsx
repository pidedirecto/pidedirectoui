/**
 * @prettier
 */
import * as React from 'react';
import { HTMLProps } from 'react';
import classes from 'src/styles/helperText.module.css';
import { classNames } from 'src/utils/css/classNames';

export function HelperText({ children, className, ...props }: Props): React.ReactElement {
    return (
        <span {...props} className={classNames(classes.text, className)}>
            {children}
        </span>
    );
}

type Props = HTMLProps<HTMLSpanElement> & {
    children: React.ReactNode;
};
