import * as React from 'react';
import { useContext } from 'react';
import { Checkbox } from 'src/components/Checkbox';
import { DropDown } from 'src/components/DropDown';
import { DropDownItem } from 'src/components/DropDownItem';
import { TableContext } from 'src/components/Table';
import { useTableActions, useTableStore } from 'src/components/table/tableStore';
import { ColumnsIcon } from 'src/icons/ColumnsIcon';
import classes from 'src/styles/table.module.css';

export function FilterColumnsTableToolbarButton(): React.ReactElement {
    const { tableId, columns } = useContext(TableContext);

    const hiddenColumnIds = useTableStore((state) => state.hiddenColumnIds);

    const setHiddenColumnIds = useTableActions((actions) => actions.setHiddenColumnIds);

    const tableHiddenColumnIds = hiddenColumnIds.find((hiddenColumnIds) => hiddenColumnIds.tableId === tableId);

    const hideColumn = (currentColumnId: string) => {
        if (tableHiddenColumnIds?.hiddenColumnIds.includes(currentColumnId)) {
            const newHiddenColumnIds = tableHiddenColumnIds?.hiddenColumnIds.filter((columnId) => columnId !== currentColumnId);
            setHiddenColumnIds(tableId, newHiddenColumnIds);
            return;
        }
        setHiddenColumnIds(tableId, [...(tableHiddenColumnIds?.hiddenColumnIds ?? []), currentColumnId]);
    };

    return (
        <DropDown variant='secondary' content={<ColumnsIcon size={20} />} classes={{ dropdown: classes.filterColumnsTableToolbarButtonDropdown }} position='right' preventClose>
            {columns.map((column) => {
                const isChecked = !tableHiddenColumnIds?.hiddenColumnIds.includes(column.id);
                return (
                    <DropDownItem key={column.id} classes={{ container: classes.filterColumnsTableToolbarButtonDropdownItem }}>
                        <Checkbox name={column.id} checked={isChecked} onChange={() => hideColumn(column.id)} label={column.content} />
                    </DropDownItem>
                );
            })}
        </DropDown>
    );
}
