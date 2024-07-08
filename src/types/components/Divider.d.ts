/**
 * @prettier
 */
import { HTMLProps } from 'react';
import * as React from 'react';

export type DividerProps = Omit<HTMLProps<HTMLInputElement>, 'className' | 'type' | 'onChange'> & {
    classes?: {
        divider?: string;
    };
    variant?: 'solid' | 'dashed' | 'dotted';
    orientation?: 'horizontal' | 'vertical';
};

export type Divider = React.FunctionComponent<DividerProps>;
