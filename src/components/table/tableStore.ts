/**
 * @prettier
 */
import { createStore } from 'src/hooks/createStore';

export const [useTableStore, useTableActions] = createStore<State, Actions>({
    initialState: {
        selectedRows: [],
    },
    actions: {
        setSelectedRows: (state, tableId, selectedRows) => {
            const tableSelectedRows = state.selectedRows.find((selectedRows) => selectedRows.tableId === tableId);
            if (tableSelectedRows) {
                tableSelectedRows.selectedRows = selectedRows;
            } else {
                state.selectedRows.push({
                    tableId,
                    selectedRows,
                });
            }
        },

        clearSelectedRows: (state, tableId) => {
            state.selectedRows = state.selectedRows.filter((selectedRows) => selectedRows.tableId !== tableId);
        },
    },
});

type Actions = {
    setSelectedRows: (tableId: string, selectedRows: Array<any>) => void;
    clearSelectedRows: (tableId: string) => void;
};

type State = {
    selectedRows: Array<{ tableId: string; selectedRows: Array<any> }>;
};
