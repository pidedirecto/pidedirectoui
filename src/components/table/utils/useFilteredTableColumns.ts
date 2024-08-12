/**
 * @prettier
 */
import { useContext } from 'react';
import { TableContext } from 'src/components/Table';
import { useTableStore } from 'src/components/table/tableStore';

export function useFilteredTableColumns() {
    const { columns, tableId } = useContext(TableContext);

    const hiddenColumnIds = useTableStore((state) => state.hiddenColumnIds);

    const tableHiddenColumnIds = hiddenColumnIds.find((hiddenColumnIds) => hiddenColumnIds.tableId === tableId);
    const filteredColumns = columns.filter((column) => !tableHiddenColumnIds?.hiddenColumnIds.includes(column.id));

    return filteredColumns;
}
