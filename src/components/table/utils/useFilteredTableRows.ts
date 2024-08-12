/**
 * @prettier
 */
import { useContext } from 'react';
import { TableContext } from 'src/components/Table';
import { useTableStore } from 'src/components/table/tableStore';
import { TableRow } from 'src/types/components/Table';

export function useFilteredTableRows(): Array<TableRow> {
    const { rows, tableId, selectable } = useContext(TableContext);

    const selectedRows = useTableStore((state) => state.selectedRows);

    if (!selectable) return rows;

    const currentSelectedRows = selectedRows.find((selectedRows) => selectedRows.tableId === tableId)?.selectedRows ?? [];
    if (!currentSelectedRows.length) return rows;

    const filteredRows = rows.filter((row) => currentSelectedRows.includes(row.rowId!));
    return filteredRows;
}
