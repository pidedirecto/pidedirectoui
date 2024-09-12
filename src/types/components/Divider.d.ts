
import * as React from 'react';

export type DividerProps = {
    variant?: 'solid' | 'dashed' | 'dotted';
    orientation?: 'horizontal' | 'vertical';
    classes?: {
        divider?: string;
    };
};

export type Divider = React.FunctionComponent<DividerProps>;
