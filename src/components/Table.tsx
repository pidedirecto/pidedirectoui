/**
 * @prettier
 */
import { useContext, useState } from 'react';
import * as React from 'react';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { VirtualizedList } from 'src/components/VirtualizedList';
import { UiLogEventTypes } from 'src/constants/UiLogEventType';
import classes from 'src/styles/table.module.css';
import type { TableColumn, TableProps, TableRow } from 'src/types/components/Table';
import { classNames } from 'src/utils/css/classNames';

export function Table({
    columns,
    rows,
    hideHeaders,
    rowsPerPage,
    emptyMessage,
    searchable,
    virtualized,
    contentHeight,
    rowHeight,
    searchInputProps,
    classes: classesProp,
    onRowClick,
}: TableProps): React.ReactElement {
    const { addElementToStackTrace } = useContext(UiLogEventTrackerContext);

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    if (!!virtualized && !contentHeight) {
        console.error('You are using a virtualized table without passing content height, contentHeight prop is required.');
    }

    if (!!virtualized && !rowHeight) {
        console.error('You are using a virtualized table without passing row height, rowHeight prop is required.');
    }

    const addTableToStackTrace = () => {
        addElementToStackTrace({
            element: 'table',
            uiLogEventType: UiLogEventTypes.USER_CLICKED_TABLE,
        });
    };

    const getTotalPages = () => Math.ceil(rows.length / (rowsPerPage ?? 1)) || 1;

    const previousPage = () => {
        if (page === 1) return;
        setPage(page - 1);
    };

    const nextPage = () => {
        if (page === getTotalPages()) return;
        setPage(page + 1);
    };

    const getRowsToShow = () => {
        if (!!search) {
            return rows.filter((row) => row.onSearch?.(search));
        }
        if (!!rowsPerPage) {
            return rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);
        }
        return rows;
    };

    return (
        <div className={classNames(classes.container, classesProp?.container)}>
            {searchable && <Input {...searchInputProps} name={'search'} type={'search'} value={search} onChange={(value) => setSearch(value)} classes={{ inputContainer: classes.inputContainer }} />}
            <table className={classNames(classes.table, classesProp?.table)} onClickCapture={addTableToStackTrace}>
                {!hideHeaders && (
                    <thead className={classes.headerRow}>
                        <tr className={classes.row}>
                            {columns.map((column, idx) => {
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
                )}
                <tbody>
                    <TableBody virtualized={virtualized} height={contentHeight} rowHeight={rowHeight}>
                        {getRowsToShow().map((row: TableRow, idx) => {
                            const isLastRow = idx === rows.length - 1;

                            return (
                                <tr onClick={() => onRowClick?.(row)} key={idx} className={classNames(classes.row, !isLastRow && classes.borderedRow, classesProp?.row, row?.className)}>
                                    {columns.map((column: TableColumn) => {
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
                    </TableBody>
                    {rows.length === 0 && !!emptyMessage && (
                        <tr className={classes.row} style={{ justifyContent: 'center' }}>
                            <td className={classNames(classes.cell, classesProp?.cell)}>{emptyMessage}</td>
                        </tr>
                    )}
                </tbody>
                {!!rowsPerPage && (
                    <tfoot>
                        <tr className={classes.row}>
                            <td style={{ width: '100%' }}>
                                <div className={classes.paginationButtonsContainer}>
                                    <span>
                                        {page} / {getTotalPages()}
                                    </span>
                                    <Button variant='icon' onClick={previousPage} classes={{ button: classes.buttons }} disabled={page === 1 || !!search}>
                                        {'<'}
                                    </Button>
                                    <Button variant='icon' onClick={nextPage} classes={{ button: classes.buttons }} disabled={page === getTotalPages() || !!search}>
                                        {'>'}
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                )}
            </table>
        </div>
    );
}

function TableBody({ children, virtualized, height, rowHeight }: TableBodyProps): React.ReactElement {
    if (!virtualized) {
        return <>{children}</>;
    }

    return (
        <VirtualizedList itemSize={rowHeight} height={height}>
            {children}
        </VirtualizedList>
    );
}

type TableBodyProps = {
    children: Array<React.ReactElement>;
    virtualized?: boolean;
    height?: number;
    rowHeight?: number;
};
