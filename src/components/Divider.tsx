import classNames from 'classnames';
import * as React from 'react';
import classes from 'src/styles/divider.module.css';
import { DividerProps } from 'src/types/components/Divider';

export function Divider({ classes: classesProp, variant, orientation }: DividerProps): React.ReactElement {
    return <hr className={classNames(classes.divider, classesProp?.divider)} data-orientation={orientation ?? 'horizontal'} data-variant={variant ?? 'solid'} />;
}
