/**
 * @prettier
 */
import * as React from 'react';
import classes from 'src/styles/divider.module.css';
import { DividerProps } from 'src/types/components/Divider';
import { classNames } from 'src/utils/css/classNames';

export function Divider({ classes: classesProp, variant, orientation }: DividerProps): React.ReactElement {
    const getClassName = () => {
        let className = classNames(classes.divider, classes.horizontal, classes.solid);

        if (variant === 'dashed') className = classNames(className, classes.dashed);
        if (variant === 'dotted') className = classNames(className, classes.dotted);
        if (orientation === 'vertical') classNames(className, classes.vertical);

        return classNames(className, classesProp?.divider);
    };

    return <div className={getClassName()} />;
}
