import * as React from "react";

export type SelectableListProps = {
    label?: string,
    options: Array<{ value: any, content: React.Node }>,
    onChange: (selectedItems: any) => void,
    value: any,
    disabled?: boolean,
    error?: boolean,
    helperText?: string,
    multiselectable?: boolean,
    classes?: {
        listContainer?: string,
        row?: string,
        label?: string,
    },
}

export type SelectableList = React.FunctionComponent<SelectableListProps>
