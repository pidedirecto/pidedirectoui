/**
 * @prettier
 */
import { HTMLProps } from 'react';
import * as React from 'react';

export type CheckboxProps = Omit<HTMLProps<HTMLInputElement>, 'className' | 'type'> & {
    helperText?: string;
    classes?: {
        container?: string;
        label?: string;
    };
    tooltip?: string;
    label?: string;
};

export type Checkbox = React.FunctionComponent<CheckboxProps>;
