import * as React from "react";
import { InputProps } from "src/types/components/Input";

// TODO: Remove deprecated fields when they are not used anymore
export type TableProps = {
    /** @deprecated Use options.hideHeaders instead */
    hideHeaders?: boolean,
    columns: Array<TableColumn>,
    rows: Array<TableRow>,
    /** @deprecated Use events.onSelect instead */
    onSelect?: (selectedRows: Array<any>) => void | Promise<void>;
    classes?: {
        table?: string,
        cell?: string,
        row?: string,
        header?: string,
        container?: string,
    },
    /** @deprecated Use options.emptyMessage instead */
    emptyMessage?: string,
    /** @deprecated Use options.searchable instead */
    searchable?: boolean,
    /** @deprecated Use options.selectable instead */
    selectable?: boolean,
    /** @deprecated Use options.virtualized instead */
    virtualized?: boolean,
    loading?: boolean,
    options?: {
        searchable?: boolean,
        selectable?: boolean,
        hideHeaders?: boolean,
        virtualized?: boolean,
        contentHeight?: number,
        rowHeight?: number,
        downloadable?: boolean,
        downloadFileName?: string,
        emptyMessage?: string,
    };
    events?: {
        onSelect?: (selectedRows: Array<any>) => void | Promise<void>;
        onRowClick?: (row: TableRow) => void | Promise<void>,
    };
    filters?: {
        columns?: boolean;
    };
    /** @deprecated Use options.contentHeight instead */
    contentHeight?: number,
    /** @deprecated Use options.rowHeight instead */
    rowHeight?: number,
    searchInputProps?: Omit<InputProps, 'name', 'value', 'onChange', 'type'>,
    rowsPerPage?: number,
    title?: string,
    toolbar?: React.ReactElement | ((params: ToolbarParams) => React.ReactElement),
    /** @deprecated Use events.onRowClick instead */
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
