import { HTMLProps } from "react";
import * as React from "react";

export type SwitchProps = Omit<HTMLProps<HTMLInputElement>, 'className' | 'type'> & {
    helperText?: string;
    classes?: {
        container?: string;
        containerError?: string;
        switch?: string;
        label?: string;
        labelError?: string;
        helperText?: string;
        helperTextError?: string;
    };
    tooltip?: string;
    label?: string;
    error?: boolean;
    labelPosition?: 'right' | 'left';
    inputRef?: React.Ref<any>;
};

export type Switch = React.FunctionComponent<SwitchProps>
