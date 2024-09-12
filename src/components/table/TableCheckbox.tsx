import * as React from 'react';
import { Checkbox } from 'src/components/Checkbox';
import { useTableActions, useTableStore } from 'src/components/table/tableStore';
import classes from 'src/styles/table.module.css';

export function TableCheckbox({ tableId, rowId, rowIds, onSelect }: Props): React.ReactElement {
    const selectedRows = useTableStore((state) => state.selectedRows);
    const setSelectedRows = useTableActions((actions) => actions.setSelectedRows);

    const currentSelectedRows = selectedRows.find((selectedRows) => selectedRows.tableId === tableId)?.selectedRows ?? [];
    const checked = currentSelectedRows.includes(rowId!);
    const checkedGeneral = !!rowIds?.length && currentSelectedRows.length === rowIds?.length;

    const handleCheckbox = () => {
        if (rowId) return handleSelectSingleRow();
        if (rowIds) return handleSelectAllRows();
    };

    const handleSelectAllRows = () => {
        if (!rowIds) return;

        const newSelectedRows: Array<any> = currentSelectedRows.length === rowIds.length ? [] : rowIds;
        setSelectedRows(tableId, newSelectedRows);
        onSelect?.(newSelectedRows);
    };

    const handleSelectSingleRow = () => {
        if (!rowId) return;

        let newSelectedRows: Array<any> = [];
        if (checked) {
            newSelectedRows = currentSelectedRows.filter((selectedRow) => selectedRow !== rowId);
        } else {
            newSelectedRows = [...currentSelectedRows, rowId];
        }
        setSelectedRows(tableId, newSelectedRows);
        onSelect?.(newSelectedRows);
    };

    return <Checkbox checked={checked || checkedGeneral} onChange={handleCheckbox} classes={{ checkbox: classes.tableCheckbox, container: classes.tableCheckboxContainer }} />;
}

type Props = {
    tableId: string;
    rowId?: any;
    rowIds?: Array<any>;
    onSelect?: (selectedRows: Array<any>) => void | Promise<void>;
};
