import * as React from 'react';
import { useContext } from 'react';
import { TableContext } from 'src/components/Table';
import { DownloadTableCsvToolbarButton } from 'src/components/table/DownloadTableCsvToolbarButton';
import { FilterColumnsTableToolbarButton } from 'src/components/table/FilterColumnsTableToolbarButton';
import { useTableActions, useTableStore } from 'src/components/table/tableStore';
import classes from 'src/styles/table.module.css';
import type { ToolbarParams } from 'src/types/components/Table';
import { isFunction } from 'src/utils/function/isFunction';

export function TableToolbar({ toolbar }: Props): React.ReactElement | null {
    const { tableId, filters, options } = useContext(TableContext);
    const clearSelectedRows = useTableActions((actions) => actions.clearSelectedRows);

    const selectedRows = useTableStore((state) => state.selectedRows);

    const currentSelectedRows = selectedRows.find((selectedRows) => selectedRows.tableId === tableId)?.selectedRows ?? [];
    const filterColumns = !!filters?.columns;

    const handleClearSelectedRows = () => {
        clearSelectedRows(tableId);
    };

    if (!toolbar && !filterColumns && !options?.downloadable) return null;

    return (
        <div className={classes.toolbarButtonsContainer}>
            <DownloadTableCsvToolbarButton />
            {!!filterColumns && <FilterColumnsTableToolbarButton />}
            {/* @ts-ignore */}
            {isFunction(toolbar) ? toolbar({ selectedRows: currentSelectedRows, clearSelectedRows: handleClearSelectedRows }) : toolbar}
        </div>
    );
}

type Props = {
    toolbar?: React.ReactElement | ((params: ToolbarParams) => React.ReactElement);
    filterColumns?: boolean;
};
