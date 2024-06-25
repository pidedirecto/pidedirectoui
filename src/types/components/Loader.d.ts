import * as React from "react";

export type LoaderProps = {
    loading: boolean;
    loadingText?:string
}

export type Loader = React.FunctionComponent<LoaderProps>
