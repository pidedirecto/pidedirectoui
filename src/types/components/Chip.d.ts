import * as React from "react";

export type ChipProps = {
    disabled?: boolean,
    children: React.Node,
    onClick?: Function,
    classes?: { chip: string },
    variant?: 'error' | 'warning' | 'success' | 'info' | 'secondary',
};

export type Chip = React.FunctionComponent<ChipProps>
