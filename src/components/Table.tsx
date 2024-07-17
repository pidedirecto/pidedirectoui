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

    if (rowIds.length !== rows.length && selectable) {
        console.error('If Table component is selectable it requires each row has a rowId but some rows do not have it');
    }

    if (!!virtualized && !contentHeight) {
        console.error('You are using a virtualized table without passing content height, contentHeight prop is required.');
    }

    if (!!virtualized && !rowHeight) {
        console.error('You are using a virtualized table without passing row height, rowHeight prop is required.');
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
        <TableContext.Provider value={{ tableId: tableId.current, columns, selectable, classes, onSelect, filters }}>
            <div className={classNames(classes.container, classesProp?.container)}>
                {!!searchable && !!title && <h2 className={classes.title}>{title}</h2>}
                <div className={classes.toolbarContainer}>
                    {!!searchable && (
                        <Input {...searchInputProps} name={'search'} type={'search'} value={search} onChange={(value) => setSearch(value)} classes={{ inputContainer: classes.inputContainer }} />
                    )}
                    {!searchable && !!title && <h2 className={classes.title}>{title}</h2>}
                    {!searchable && !title && <div></div>}
                    <TableToolbar toolbar={toolbar} />
                </div>
                <table className={classNames(classes.table, classesProp?.table)} onClickCapture={addTableToStackTrace}>
                    {!hideHeaders && <TableHeader rowIds={rowIds} />}
                    <tbody>
                        <TableBody virtualized={virtualized} height={contentHeight} rowHeight={rowHeight}>
                            <TableRows rows={getRowsToShow()} onRowClick={onRowClick} />
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
        </TableContext.Provider>
    );
}

export const TableContext = createContext<TableContextType>({
    tableId: newId(),
    columns: [],
});

type TableContextType = {
    tableId: string;
    columns: TableProps['columns'];
    selectable?: TableProps['selectable'];
    filters?: TableProps['filters'];
    onSelect?: TableProps['onSelect'];
    classes?: TableProps['classes'];
};
