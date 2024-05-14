import * as React from "react";
import { InputProps } from "src/types/components/Input";

export type TableProps = {
    hideHeaders?: boolean,
    columns: Array<TableColumn>,
    rows: Array<TableRow>,
    onSelect?: (selectedRows: Array<RowId>) => void | Promise<void>;
    classes?: {
        table?: string,
        cell?: string,
        row?: string,
        header?: string,
        container?: string,
    },
    emptyMessage?: string,
    searchable?: boolean,
    selectable?: boolean,
    virtualized?: boolean,
    contentHeight?: number,
    rowHeight?: number,
    searchInputProps?: Omit<InputProps, 'name', 'value', 'onChange', 'type'>,
    rowsPerPage?: number,
    title?: string,
    toolbar?: React.ReactElement,
    onRowClick?: (row: TableRow) => void | Promise<void>,
};

export type TableColumn = {
    id: string,
    content: React.Node,
    size?: number,
}

export type TableRow = Omit<Record<string, React.ReactNode>, 'className', 'onSearch'> & {
    className?: string,
    onSearch?: (query: string) => boolean,
    rowId?: RowId;
}

export type Table = React.FunctionComponent<TableProps>

export type RowId = string | number
