/**
 * @prettier
 */
import * as React from 'react';
import classes from 'src/styles/circleIconContainer.module.css';
import { CircleIconContainerProps } from 'src/types/components/CircleIconContainer';
import { classNames } from 'src/utils/css/classNames';

export function CircleIconContainer({ disabled, classes: classesProp, children }: CircleIconContainerProps): React.ReactElement {
    return <div className={classNames(disabled ? classes.containerDisabled : classes.container, classesProp?.container)}>{children}</div>;
}
