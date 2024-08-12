/**
 * @prettier
 */
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { LinearProgress } from 'src/components/LinearProgress';
import { TableBody } from 'src/components/table/TableBody';
import { TableHeader } from 'src/components/table/TableHeader';
import { TableRows } from 'src/components/table/TableRows';
import { useTableActions } from 'src/components/table/tableStore';
import { TableToolbar } from 'src/components/table/TableToolbar';
import { UiLogEventTrackerContext } from 'src/components/UiLogEventTracker';
import { UiLogEventTypes } from 'src/constants/UiLogEventType';
import classes from 'src/styles/table.module.css';
import type { TableProps } from 'src/types/components/Table';
import { classNames } from 'src/utils/css/classNames';
import { removeNulls } from 'src/utils/object/removeNulls';
import { newId } from 'src/utils/string/newId';

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
    options,
    events,
    loading,
    filters,
    contentHeight,
    rowHeight,
    title,
    toolbar,
    searchInputProps,
    classes: classesProp,
    onRowClick,
}: TableProps): React.ReactElement {
    const tableId = useRef(newId());
    const { addElementToStackTrace } = useContext(UiLogEventTrackerContext);

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const clearSelectedRows = useTableActions((actions) => actions.clearSelectedRows);

    const rowIds = removeNulls<Array<any>>(rows.map((row) => row.rowId));

    const isSearchable = options?.searchable || searchable;
    const isSelectable = options?.selectable || selectable;
    const isVirtualized = options?.virtualized || virtualized;
    const tableRowHeight = options?.rowHeight || rowHeight;
    const tableContentHeight = options?.contentHeight || contentHeight;
    const tableEmptyMessage = options?.emptyMessage || emptyMessage;

    if (rowIds.length !== rows.length && isSelectable) {
        console.error('If Table component is selectable it requires each row has a rowId but some rows do not have it');
    }

    if (!!isVirtualized && !tableContentHeight) {
        console.error('You are using a virtualized table without passing content height, options.contentHeight prop is required.');
    }

    if (!!isVirtualized && !tableRowHeight) {
        console.error('You are using a virtualized table without passing row height, options.rowHeight prop is required.');
    }

    useEffect(() => {
        return () => {
            clearSelectedRows(tableId.current);
        };
    }, []);

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
        <TableContext.Provider value={{ tableId: tableId.current, columns, rows: getRowsToShow(), selectable: isSelectable, classes, onSelect: events?.onSelect ?? onSelect, filters, options }}>
            <div className={classNames(classes.container, classesProp?.container)}>
                {!!isSearchable && !!title && <h2 className={classes.title}>{title}</h2>}
                <div className={classes.toolbarContainer}>
                    {!!isSearchable && (
                        <Input {...searchInputProps} name={'search'} type={'search'} value={search} onChange={(value) => setSearch(value)} classes={{ inputContainer: classes.inputContainer }} />
                    )}
                    {!isSearchable && !!title && <h2 className={classes.title}>{title}</h2>}
                    {!isSearchable && !title && <div></div>}
                    <TableToolbar toolbar={toolbar} />
                </div>
                <table className={classNames(classes.table, classesProp?.table)} onClickCapture={addTableToStackTrace}>
                    {!(options?.hideHeaders ?? hideHeaders) && <TableHeader rowIds={rowIds} />}
                    <tbody>
                        <TableBody virtualized={isVirtualized} height={tableContentHeight} rowHeight={tableRowHeight}>
                            <TableRows rows={getRowsToShow()} onRowClick={events?.onRowClick ?? onRowClick} />
                        </TableBody>
                        {rows.length === 0 && !!tableEmptyMessage && (
                            <tr className={classes.row} style={{ justifyContent: 'center' }}>
                                <td className={classNames(classes.cell, classesProp?.cell)}>{tableEmptyMessage}</td>
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
        </TableContext.Provider>
    );
}

export const TableContext = createContext<TableContextType>({
    tableId: newId(),
    columns: [],
    rows: [],
});

type TableContextType = {
    tableId: string;
    columns: TableProps['columns'];
    rows: TableProps['rows'];
    selectable?: boolean;
    options?: TableProps['options'];
    filters?: TableProps['filters'];
    onSelect?: TableProps['onSelect'];
    classes?: TableProps['classes'];
};
