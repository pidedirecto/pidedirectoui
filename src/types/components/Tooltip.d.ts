import * as React from "react";

export type TooltipProps = {
    id?: string;
    text?: string;
    type?: 'error' | 'success';
    forceOpen?: boolean;
    classes?: {
        text?: string;
    };
    position?: 'top' | 'bottom' | 'left' | 'right';
    children?: React.ReactNode;
}

export type Tooltip = React.FunctionComponent<TooltipProps>
