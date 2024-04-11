import * as React from "react";

export type MultiselectableAutocompleteProps = {
    label?: string,
    name: string,
    placeholder?: string,
    helperText?: string,
    productsSelectedLabel?: string,
    selectAllOptionLabel?: string,
    defaultValue?: Array<string>,
    data: Array<any>,
    getOptionValue: (req:any) => any,
    getOptionLabel: (req:any) => any,
    getOptionDisabled?: (req:any) => boolean,
    renderOption: (req:any) => React.Node,
    disabled?: boolean,
    error?: boolean,
    selectAllOption?: boolean,
    required?: boolean | { value: number, message: string },
    InputProps?: any,
    onChange: Function,
    tooltip?: string,
    classes?: {
        optionsContainer?: string,
        optionContainer?: string,
    },
    selectedItems: Array<string>,
};

export type MultiselectableAutocomplete = React.FunctionComponent<MultiselectableAutocompleteProps>
