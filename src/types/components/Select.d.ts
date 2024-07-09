import * as React from "react";
import { DropDownProps } from "src/types/components/DropDown";

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
        dropdown?: string,
        item?: string,
        button?: string,
    },
    position?: DropDownProps['position'],
    multiselectable?: boolean,
    disabled?: boolean,
    searchable?: boolean,
    preventClose?: boolean,
    error?: boolean,
    tooltip?: string,
    onChange: Function,
}

export type Select = React.FunctionComponent<SelectProps>
