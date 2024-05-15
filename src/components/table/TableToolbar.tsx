/**
 * @prettier
 */
import * as React from 'react';
import { useTableStore } from 'src/components/table/TableCheckbox';
import classes from 'src/styles/table.module.css';
import { isFunction } from 'src/utils/function/isFunction';

export function TableToolbar({ toolbar }: Props): React.ReactElement | null {
    const selectedRows = useTableStore((state) => state.selectedRows);

    if (!toolbar) return null;

    return (
        <div className={classes.toolbarButtonsContainer}>
            {/* @ts-ignore */}
            {isFunction(toolbar) ? toolbar(selectedRows) : toolbar}
        </div>
    );
}

type Props = {
    toolbar?: React.ReactElement | ((selectedItems: Array<any>) => React.ReactElement);
};
