import * as React from "react";

export type SelectProps = {
    label?: string,
    placeholder?: string,
    helperText?: string,
    name: string,
    value: any | Array<any>,
    options: Array<{
        value: any,
        label: string,
        content?: React.ReactNode
    }>,
    classes?: {
        container?: string,
        selectContainer?: string,
        item?: string,
        button?: string,
    },
    multiselectable?: boolean,
    disabled?: boolean,
    preventClose?: boolean,
    error?: boolean,
    tooltip?: string,
    onChange: Function,
}

export type Select = React.FunctionComponent<SelectProps>
