import * as React from 'react';
import { useContext } from 'react';
import { Button } from 'src/components/Button';
import { TableContext } from 'src/components/Table';
import { useFilteredTableColumns } from 'src/components/table/utils/useFilteredTableColumns';
import { useFilteredTableRows } from 'src/components/table/utils/useFilteredTableRows';
import { DownloadIcon } from 'src/icons/DownloadIcon';
import { TableRow } from 'src/types/components/Table';
import { objectsToCsv } from 'src/utils/csv/objectsToCsv';
import { downloadTextInFile } from 'src/utils/file/downloadTextInFile';
import { removeNulls } from 'src/utils/object/removeNulls';
import { convertReactNodeToString } from 'src/utils/react/convertReactNodeToString';

export function DownloadTableCsvToolbarButton(): React.ReactElement | null {
    const { options, columns } = useContext(TableContext);

    const filteredColumns = useFilteredTableColumns();
    const rows = useFilteredTableRows();

    const downloadTableCsv = () => {
        const tableContent = rows.map((row) => {
            return columns.reduce((formattedRow, column) => {
                const isColumnBeingShown = filteredColumns.some((filteredColumn) => filteredColumn.id === column.id);
                return removeNulls({
                    ...formattedRow,
                    [convertReactNodeToString(column.content)]: isColumnBeingShown ? convertReactNodeToString(row[column.id]) : undefined,
                });
            }, {} as TableRow);
        });

        if (!options?.downloadFileName) {
            console.error('You are trying to download the table csv file without passing a file name, options.downloadFileName is required');
            return;
        }

        downloadTextInFile(objectsToCsv(tableContent), `${options?.downloadFileName}.csv`);
    };

    if (!options?.downloadable) return null;

    return (
        <Button variant='secondary' onClick={downloadTableCsv}>
            <DownloadIcon size={20} />
        </Button>
    );
}
