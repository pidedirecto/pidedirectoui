import * as React from 'react';
import { FixedSizeList } from 'react-window';
import classes from 'src/styles/virtualizedList.module.css';
import { VirtualizedListProps } from 'src/types/components/VirtualizedList';

export function VirtualizedList({ children, height, width, itemSize, overScanCount, orientation }: VirtualizedListProps): React.ReactElement {
    return (
        <div className={classes.container}>
            <FixedSizeList
                layout={orientation}
                height={height ?? 800}
                width={width ?? '100%'}
                itemCount={React.Children.count(children)}
                itemSize={itemSize ?? 150}
                overscanCount={overScanCount ?? 20}
            >
                {({ index, style }: { index: number; style: any }) => <div style={style}>{React.Children.toArray(children)[index]}</div>}
            </FixedSizeList>
        </div>
    );
}
