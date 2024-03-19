import * as React from 'react'
import { HTMLProps } from "react";

export type InputProps = Omit<HTMLProps<HTMLInputElement>, 'className' | 'onChange'> & {
    name: string,
    value?: string,
    label?: string,
    tooltip?: string,
    helperText?: string,
    error?: boolean,
    onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>,
    inputRef?: React.Ref<HTMLInputElement>,
    InputComponent?: React.FunctionComponent<any>,
    leftAdornment?: React.ReactNode,
    rightAdornment?: React.ReactNode,
    classes?: {
        container?: string,
        inputContainer?: string,
        label?: string,
        input?: string,
    },
}

export type Input = React.FunctionComponent<InputProps>
