/**
 * @prettier
 */
import { useContext, useState } from 'react';
import * as React from 'react';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { LinearProgress } from 'src/components/LinearProgress';
import { TableBody } from 'src/components/table/TableBody';
import { TableCheckbox } from 'src/components/table/TableCheckbox';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes } from 'src/constants/UiLogEventType';
import classes from 'src/styles/table.module.css';
import type { TableColumn, TableProps, TableRow } from 'src/types/components/Table';
import { classNames } from 'src/utils/css/classNames';
import { removeNulls } from 'src/utils/object/removeNulls';

export function Table({
    columns,
    rows,
    onSelect,
    hideHeaders,
    rowsPerPage,
    emptyMessage,
    searchable,
    selectable,
    virtualized,
    loading,
    contentHeight,
    rowHeight,
    title,
    toolbar,
    searchInputProps,
    classes: classesProp,
    onRowClick,
}: TableProps): React.ReactElement {
    const { addElementToStackTrace } = useContext(UiLogEventTrackerContext);

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const rowIds = removeNulls<Array<any>>(rows.map((row) => row.rowId));

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
            {!!searchable && !!title && <h2 className={classes.title}>{title}</h2>}
            <div className={classes.toolbarContainer}>
                {!!searchable && (
                    <Input {...searchInputProps} name={'search'} type={'search'} value={search} onChange={(value) => setSearch(value)} classes={{ inputContainer: classes.inputContainer }} />
                )}
                {!searchable && !!title && <h2 className={classes.title}>{title}</h2>}
                {!searchable && !title && <div></div>}
                {!!toolbar && <div className={classes.toolbarButtonsContainer}>{toolbar}</div>}
            </div>
            <table className={classNames(classes.table, classesProp?.table)} onClickCapture={addTableToStackTrace}>
                {!hideHeaders && (
                    <thead className={classes.headerRow}>
                        <tr className={classes.row}>
                            {!!selectable && !!onSelect && (
                                <th className={classNames(classes.header, classesProp?.header)} style={{ width: '10%' }}>
                                    <TableCheckbox rowIds={rowIds} onSelect={onSelect} />
                                </th>
                            )}
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
                                <tr onClick={() => onRowClick?.(row)} key={row.key ?? idx} className={classNames(classes.row, !isLastRow && classes.borderedRow, classesProp?.row, row?.className)}>
                                    {!!selectable && !!onSelect && (
                                        <td className={classNames(classes.cell, classesProp?.cell)} style={{ width: `10%` }}>
                                            <TableCheckbox rowId={row.rowId} onSelect={onSelect} />
                                        </td>
                                    )}
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
            {loading && <LinearProgress />}
        </div>
    );
}
