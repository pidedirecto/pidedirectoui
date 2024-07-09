/**
 * @prettier
 */
import * as React from 'react';

export type DividerProps = {
    classes?: {
        divider?: string;
    };
    variant?: 'solid' | 'dashed' | 'dotted';
    orientation?: 'horizontal' | 'vertical';
};

export type Divider = React.FunctionComponent<DividerProps>;
