import * as React from "react";

export type SelectableListProps = {
    label?: string,
    options: Array<{ value: any, label: string, content?: React.Node }>,
    onChange: (selectedItems: any) => void,
    value: any,
    disabled?: boolean,
    error?: boolean,
    helperText?: string,
    multiselectable?: boolean,
    variant?: 'underline',
    virtualized?: boolean,
    searchable?: boolean,
    height?: number,
    classes?: {
        listContainer?: string,
        row?: string,
        label?: string,
    },
}

export type SelectableList = React.FunctionComponent<SelectableListProps>
