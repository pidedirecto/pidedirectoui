/**
 * @prettier
 */
import * as React from 'react';
import { FixedSizeList } from 'react-window';
import classes from 'src/styles/virtualizedList.module.css';
import { VirtualizedListProps } from 'src/types/components/VirtualizedList';

export function VirtualizedList({ children, height, itemSize, overScanCount }: VirtualizedListProps): React.ReactElement {
    return (
        <div className={classes.container}>
            <FixedSizeList height={height ?? 800} width={'100%'} itemCount={React.Children.count(children)} itemSize={itemSize ?? 150} overscanCount={overScanCount ?? 20}>
                {({ index, style }: { index: number; style: any }) => <div style={style}>{React.Children.toArray(children)[index]}</div>}
            </FixedSizeList>
        </div>
    );
}
