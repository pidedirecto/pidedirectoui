/**
 * @prettier
 */
import * as React from 'react';
import { useContext } from 'react';
import { TableContext } from 'src/components/Table';
import { TableCheckbox } from 'src/components/table/TableCheckbox';
import { useTableStore } from 'src/components/table/tableStore';
import classes from 'src/styles/table.module.css';
import { classNames } from 'src/utils/css/classNames';

export function TableHeader({ rowIds }: Props): React.ReactElement {
    const { columns, tableId, selectable, onSelect, classes: classesProp } = useContext(TableContext);

    const hiddenColumnIds = useTableStore((state) => state.hiddenColumnIds);

    const tableHiddenColumnIds = hiddenColumnIds.find((hiddenColumnIds) => hiddenColumnIds.tableId === tableId);
    const filteredColumns = columns.filter((column) => !tableHiddenColumnIds?.hiddenColumnIds.includes(column.id));

    return (
        <thead className={classes.headerRow}>
            <tr className={classes.row}>
                {!!selectable && (
                    <th className={classNames(classes.header, classesProp?.header)} style={{ width: '10%' }}>
                        <TableCheckbox tableId={tableId} rowIds={rowIds} onSelect={onSelect} />
                    </th>
                )}
                {filteredColumns.map((column, idx) => {
                    const columnSize = column.size || 1;
                    const width = 100 * columnSize;
                    return (
                        <th key={idx} className={classNames(classes.header, classesProp?.header)} style={{ width: `${width}%` }}>
                            {column.content}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

type Props = {
    rowIds: Array<string>;
};
