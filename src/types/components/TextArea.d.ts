import * as React from 'react'
import { HTMLProps } from "react";

export type TextAreaProps = Omit<HTMLProps<HTMLTextAreaElement>, 'className' | 'onChange'> & {
    name: string,
    value?: string,
    label?: string,
    tooltip?: string,
    helperText?: string,
    error?: boolean,
    required?: boolean,
    disabled?:boolean,
    onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void | Promise<void>,
    inputRef?: React.Ref<HTMLTextAreaElement>,
    classes?: {
        container?: string,
        label?: string,
        input?: string,
    },
}

export type TextArea = React.FunctionComponent<TextAreaProps>
