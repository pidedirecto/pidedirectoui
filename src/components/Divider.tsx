/**
 * @prettier
 */
import classNames from 'classnames';
import * as React from 'react';
import classes from 'src/styles/divider.module.css';
import { DividerProps } from 'src/types/components/Divider';

export function Divider({ classes: classesProp, variant, orientation }: DividerProps): React.ReactElement {
    const getClassName = () => {
        let className = classNames(classes.divider);

        if (variant === 'dashed') className = classNames(className, classes.dashed);
        if (variant === 'dotted') className = classNames(className, classes.dotted);
        if (variant === 'solid' || !variant) className = classNames(className, classes.solid);

        return classNames(className, classesProp?.divider);
    };

    return <hr className={getClassName()} data-orientation={orientation ?? 'horizontal'} />;
}
