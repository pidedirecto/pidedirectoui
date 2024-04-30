import * as React from "react";

export type DropDownProps = {
    content: React.ReactNode,
    variant?: 'secondary' | 'outline' | 'text' | 'icon',
    position?: 'right' | 'left',
    disabled?: boolean,
    preventClose?: boolean,
    children: React.ReactNode,
    classes?: {
        container?: string,
        button?: string,
        dropdown?: string,
    },
}

export type DropDown = React.FunctionComponent<DropDownProps>
