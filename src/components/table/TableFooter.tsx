import * as React from 'react';
import { useContext } from 'react';
import { Button } from 'src/components/Button';
import { TableContext } from 'src/components/Table';
import { useFilteredTableColumns } from 'src/components/table/utils/useFilteredTableColumns';
import classes from 'src/styles/table.module.css';
import { TableColumn } from 'src/types/components/Table';
import { classNames } from 'src/utils/css/classNames';

export function TableFooter({ page, totalPages, disabled, nextPage, previousPage }: Props): React.ReactElement | null {
    const { options, rowsPerPage, footer, classes: classesProp } = useContext(TableContext);
    const filteredColumns = useFilteredTableColumns();

    const hasRowsPerPage = !!rowsPerPage || !!options?.rowsPerPage;

    if (!hasRowsPerPage && !footer) return null;

    return (
        <tfoot>
            {!!footer && (
                <tr className={classNames(classes.row, classes.footer, hasRowsPerPage && classes.borderedRow, classesProp?.footer)}>
                    {filteredColumns.map((column: TableColumn) => {
                        const columnSize = column.size || 1;
                        const width = 100 * columnSize;
                        return (
                            <td key={column.id} className={classNames(classes.cell)} style={{ width: `${width}%` }}>
                                {footer()[column.id]}
                            </td>
                        );
                    })}
                </tr>
            )}
            {hasRowsPerPage && (
                <tr className={classes.row}>
                    <td style={{ width: '100%' }}>
                        <div className={classes.paginationButtonsContainer}>
                            <span>
                                {page} / {totalPages}
                            </span>
                            <Button variant='icon' onClick={previousPage} classes={{ button: classes.buttons }} disabled={page === 1 || disabled}>
                                {'<'}
                            </Button>
                            <Button variant='icon' onClick={nextPage} classes={{ button: classes.buttons }} disabled={page === totalPages || disabled}>
                                {'>'}
                            </Button>
                        </div>
                    </td>
                </tr>
            )}
        </tfoot>
    );
}

type Props = {
    page: number;
    totalPages: number;
    disabled: boolean;
    previousPage: () => void;
    nextPage: () => void;
};
