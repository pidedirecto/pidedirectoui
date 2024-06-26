import * as React from 'react'
import { HTMLProps } from "react";

export type RadioProps = Omit<HTMLProps<HTMLInputElement>, 'className' | 'onChange' | 'type' | 'name'> & {
    value: any,
    checked?: boolean,
    label: string,
    tooltip?: string,
    disabled?:boolean,
    onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>,
    inputRef?: React.Ref<HTMLInputElement>,
    classes?: {
        container?: string,
        label?: string,
        input?: string,
    },
}

export type Radio = React.FunctionComponent<RadioProps>
