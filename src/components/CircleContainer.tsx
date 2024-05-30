/**
 * @prettier
 */
import * as React from 'react';
import classes from 'src/styles/circleContainer.module.css';
import { CircleContainerProps } from 'src/types/components/CircleContainer';
import { classNames } from 'src/utils/css/classNames';

export function CircleContainer({ disabled, classes: classesProp, children }: CircleContainerProps): React.ReactElement {
    return <div className={classNames(disabled ? classes.containerDisabled : classes.container, classesProp?.container)}>{children}</div>;
}
