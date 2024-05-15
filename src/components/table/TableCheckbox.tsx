/**
 * @prettier
 */
import * as React from 'react';
import { Checkbox } from 'src/components/Checkbox';
import { createStore } from 'src/hooks/createStore';
import classes from 'src/styles/table.module.css';

export function TableCheckbox({ rowId, rowIds, onSelect }: Props): React.ReactElement {
    const selectedRows = useTableStore((state) => state.selectedRows);
    const setSelectedRows = useTableActions((actions) => actions.setSelectedRows);

    const checked = selectedRows.includes(rowId!);
    const checkedGeneral = !!rowIds?.length && selectedRows.length === rowIds?.length;

    const handleCheckbox = () => {
        if (rowId) return handleSelectSingleRow();
        if (rowIds) return handleSelectAllRows();
    };

    const handleSelectAllRows = () => {
        if (!rowIds) return;

        const newSelectedRows: Array<any> = !!selectedRows.length ? [] : rowIds;
        setSelectedRows(newSelectedRows);
        onSelect(newSelectedRows);
    };

    const handleSelectSingleRow = () => {
        if (!rowId) return;

        let newSelectedRows: Array<any> = [];
        if (checked) {
            newSelectedRows = selectedRows.filter((selectedRows) => selectedRows !== rowId);
        } else {
            newSelectedRows = [...selectedRows, rowId];
        }
        setSelectedRows(newSelectedRows);
        onSelect(newSelectedRows);
    };

    return <Checkbox checked={checked || checkedGeneral} onChange={handleCheckbox} classes={{ checkbox: classes.tableCheckbox, container: classes.tableCheckboxContainer }} />;
}

const [useTableStore, useTableActions] = createStore<State, Actions>({
    initialState: {
        selectedRows: [],
    },
    actions: {
        setSelectedRows: (state, selectedRows) => {
            state.selectedRows = selectedRows;
        },
    },
});

type Actions = {
    setSelectedRows: (selectedRows: Array<any>) => void;
};

type State = {
    selectedRows: Array<any>;
};

type Props = {
    rowId?: any;
    rowIds?: Array<any>;
    onSelect: (selectedRows: Array<any>) => void | Promise<void>;
};
