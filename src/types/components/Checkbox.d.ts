/**
 * @prettier
 */
import { HTMLProps } from 'react';
import * as React from 'react';

export type CheckboxProps = Omit<HTMLProps<HTMLInputElement>, 'className' | 'type'> & {
    helperText?: string;
    classes?: {
        container?: string;
        containerError?: string;
        label?: string;
        labelError?: string;
        helperText?: string;
        helperTextError?: string;
    };
    tooltip?: string;
    label?: string;
    error?: boolean;
    inputRef?: React.Ref<any>;
};

export type Checkbox = React.FunctionComponent<CheckboxProps>;
