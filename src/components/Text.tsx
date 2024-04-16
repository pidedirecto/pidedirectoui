/**
 * @prettier
 */
import * as React from 'react';
import classes from 'src/styles/text.module.css';
import { TextProps } from 'src/types/components/Text';
import { classNames } from 'src/utils/css/classNames';

export function Text({ children, weight, size, variant, className, ...props }: TextProps): React.ReactElement {
    if (variant === 'title') {
        return (
            <h1 {...props} data-weight={weight} data-size={size} className={classNames(classes.text, classes.title, className)}>
                {children}
            </h1>
        );
    }

    if (variant === 'subtitle') {
        return (
            <h2 {...props} data-weight={weight} data-size={size} className={classNames(classes.text, classes.subtitle, className)}>
                {children}
            </h2>
        );
    }

    if (variant === 'paragraph') {
        return (
            <p {...props} data-weight={weight} data-size={size} className={classNames(classes.text, className)}>
                {children}
            </p>
        );
    }

    return (
        <span {...props} data-weight={weight} data-size={size} className={classNames(classes.text, className)}>
            {children}
        </span>
    );
}
