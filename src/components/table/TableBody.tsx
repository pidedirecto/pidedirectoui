/**
 * @prettier
 */
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
    children: Array<React.ReactElement>;
    virtualized?: boolean;
    height?: number;
    rowHeight?: number;
};
