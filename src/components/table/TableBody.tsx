import * as React from 'react';
import { VirtualizedList } from 'src/components/VirtualizedList';

export function TableBody({ virtualized, children, height, rowHeight }: Props): React.ReactElement {
    if (!virtualized) {
        return <>{children}</>;
    }

    return (
        <VirtualizedList itemSize={rowHeight} height={height}>
            {children}
        </VirtualizedList>
    );
}

type Props = {
    children: React.ReactNode;
    virtualized?: boolean;
    height?: number;
    rowHeight?: number;
};
