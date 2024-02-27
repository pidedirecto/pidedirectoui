/**
 * @prettier
 */
import { HTMLProps } from 'react';
import * as React from 'react';

export type CheckboxProps = Omit<HTMLProps<HTMLInputElement>, 'className' | 'type' | 'onChange'> & {
    helperText?: string;
    classes?: {
        container?: string;
        containerError?: string;
        label?: string;
        checkbox?: string;
        labelError?: string;
        helperText?: string;
        helperTextError?: string;
    };
    tooltip?: string;
    label?: string;
    error?: boolean;
    inputRef?: React.Ref<any>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>;
};

export type Checkbox = React.FunctionComponent<CheckboxProps>;
