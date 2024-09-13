import { createStore } from 'src/hooks/createStore';

export const [useTableStore, useTableActions] = createStore<State, Actions>({
    initialState: {
        selectedRows: [],
        hiddenColumnIds: [],
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

        setHiddenColumnIds: (state, tableId, hiddenColumnIds) => {
            const tableHiddenColumnIds = state.hiddenColumnIds.find((hiddenColumnIds) => hiddenColumnIds.tableId === tableId);
            if (tableHiddenColumnIds) {
                tableHiddenColumnIds.hiddenColumnIds = hiddenColumnIds;
            } else {
                state.hiddenColumnIds.push({
                    tableId,
                    hiddenColumnIds,
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
    setHiddenColumnIds: (tableId: string, hiddenColumnIds: Array<string>) => void;
    clearSelectedRows: (tableId: string) => void;
};

type State = {
    selectedRows: Array<{ tableId: string; selectedRows: Array<any> }>;
    hiddenColumnIds: Array<{ tableId: string; hiddenColumnIds: Array<string> }>;
};
