import * as React from "react";
import { InputProps } from "src/types/components/Input";

export type TableProps = {
    hideHeaders?: boolean,
    columns: Array<TableColumn>,
    rows: Array<TableRow>,
    classes?: {
        table?: string,
        cell?: string,
        header?: string,
        container?: string,
    },
    emptyMessage?: string,
    searchable?: boolean,
    searchInputProps?: Omit<InputProps, 'name', 'value', 'onChange', 'type'>,
    rowsPerPage?: number,
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
}

export type Table = React.FunctionComponent<TableProps>

