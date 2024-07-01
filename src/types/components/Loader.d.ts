import * as React from "react";

export type LoaderProps = {
    loading: boolean;
    text?: string
    size?: number
    classes?: {
        text?: string;
    }
}

export type Loader = React.FunctionComponent<LoaderProps>
