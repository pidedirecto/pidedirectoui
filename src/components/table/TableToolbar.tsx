/**
 * @prettier
 */
import * as React from 'react';
import { useTableActions, useTableStore } from 'src/components/table/tableStore';
import classes from 'src/styles/table.module.css';
import type { ToolbarParams } from 'src/types/components/Table';
import { isFunction } from 'src/utils/function/isFunction';

export function TableToolbar({ tableId, toolbar }: Props): React.ReactElement | null {
    const clearSelectedRows = useTableActions((actions) => actions.clearSelectedRows);

    const selectedRows = useTableStore((state) => state.selectedRows);
    const currentSelectedRows = selectedRows.find((selectedRows) => selectedRows.tableId === tableId)?.selectedRows ?? [];

    const handleClearSelectedRows = () => {
        clearSelectedRows(tableId);
    };

    if (!toolbar) return null;

    return (
        <div className={classes.toolbarButtonsContainer}>
            {/* @ts-ignore */}
            {isFunction(toolbar) ? toolbar({ selectedRows: currentSelectedRows, clearSelectedRows: handleClearSelectedRows }) : toolbar}
        </div>
    );
}

type Props = {
    toolbar?: React.ReactElement | ((params: ToolbarParams) => React.ReactElement);
    tableId: string;
};
