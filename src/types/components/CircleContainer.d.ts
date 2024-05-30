import * as React from "react";

export type CircleContainerProps = {
    disabled?:boolean,
    children: React.ReactNode,
    classes?: {
        container?: string,
    },
};

export type CircleContainer = React.FunctionComponent<CircleContainerProps>
