/**
 * @prettier
 */
import * as React from 'react';
import { useContext } from 'react';
import { TableContext } from 'src/components/Table';
import { TableCheckbox } from 'src/components/table/TableCheckbox';
import { useFilteredTableColumns } from 'src/components/table/utils/useFilteredTableColumns';
import classes from 'src/styles/table.module.css';
import { TableColumn, TableProps, TableRow } from 'src/types/components/Table';
import { classNames } from 'src/utils/css/classNames';

export function TableRows({ rows, onRowClick }: Props): React.ReactElement {
    const { tableId, selectable, onSelect, classes: classesProp } = useContext(TableContext);

    const filteredColumns = useFilteredTableColumns();

    return (
        <>
            {rows.map((row: TableRow, idx) => {
                const isLastRow = idx === rows.length - 1;

                return (
                    <tr onClick={() => onRowClick?.(row)} key={row.key ?? idx} className={classNames(classes.row, !isLastRow && classes.borderedRow, classesProp?.row, row?.className)}>
                        {!!selectable && (
                            <td className={classNames(classes.cell, classesProp?.cell)} style={{ width: `10%` }}>
                                <TableCheckbox tableId={tableId} rowId={row.rowId} onSelect={onSelect} />
                            </td>
                        )}
                        {filteredColumns.map((column: TableColumn) => {
                            const columnSize = column.size || 1;
                            const width = 100 * columnSize;
                            return (
                                <td key={column.id} className={classNames(classes.cell, classesProp?.cell)} style={{ width: `${width}%` }}>
                                    {row[column.id]}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </>
    );
}

type Props = {
    rows: TableProps['rows'];
    onRowClick: TableProps['onSelect'];
};
