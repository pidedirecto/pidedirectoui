import * as React from 'react';

export type VirtualizedListProps = {
    height?: number;
    width?: number;
    itemSize?: number;
    overScanCount?: number;
    orientation?: 'horizontal';
    children: React.ReactNode;
};

export type VirtualizedList = React.FunctionComponent<VirtualizedListProps>;
