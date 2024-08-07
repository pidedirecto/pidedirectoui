import * as React from "react";
import { InputProps } from "src/types/components/Input";

export type TableProps = {
    hideHeaders?: boolean,
    columns: Array<TableColumn>,
    rows: Array<TableRow>,
    onSelect?: (selectedRows: Array<any>) => void | Promise<void>;
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
    loading?: boolean,
    filters?: {
        columns?: boolean;
    },
    contentHeight?: number,
    rowHeight?: number,
    searchInputProps?: Omit<InputProps, 'name', 'value', 'onChange', 'type'>,
    rowsPerPage?: number,
    title?: string,
    toolbar?: React.ReactElement | ((params: ToolbarParams) => React.ReactElement),
    onRowClick?: (row: TableRow) => void | Promise<void>,
};

export type TableColumn = {
    id: string,
    content: React.Node,
    size?: number,
}

export type TableRow = Omit<Record<string, React.ReactNode>, 'className', 'onSearch'> & {
    className?: string,
    key: string,
    onSearch?: (query: string) => boolean,
    rowId?: any;
}

export type Table = React.FunctionComponent<TableProps>

export type ToolbarParams = {
    selectedRows: Array<any>;
    clearSelectedRows: () => void
}
