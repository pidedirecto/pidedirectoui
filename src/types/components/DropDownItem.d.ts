import * as React from "react";

export type DropDownItemProps = {
    selected?: boolean;
    children: React.ReactNode,
    onClick?: () => void | Promise<void>;
    classes?: {
        container?: string;
    },
}

export type DropDownItem = React.FunctionComponent<DropDownItemProps>
