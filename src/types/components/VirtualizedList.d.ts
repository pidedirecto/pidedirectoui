import * as React from "react";

export type VirtualizedListProps = {
    height?: number,
    itemSize?:number,
    overScanCount?:number,
    children: React.ReactNode,

};

export type VirtualizedList = React.FunctionComponent<VirtualizedListProps>
