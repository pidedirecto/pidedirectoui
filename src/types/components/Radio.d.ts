import * as React from 'react';
import { HTMLProps } from 'react';

export type RadioProps = Omit<HTMLProps<HTMLInputElement>, 'className' | 'onChange' | 'type' | 'name' | 'value'> & {
    value: any;
    checked?: boolean;
    label: string;
    tooltip?: string;
    helperText?: string;
    disabled?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    classes?: {
        container?: string;
        label?: string;
        input?: string;
        helperText?: string;
    };
};

export type Radio = React.FunctionComponent<RadioProps>;
