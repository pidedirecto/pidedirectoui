import * as React from "react";

export type CircleIconContainerProps = {
    disabled?:boolean,
    children: React.ReactNode,
    classes?: {
        container?: string,
    },
};

export type CircleIconContainer = React.FunctionComponent<CircleIconContainerProps>
