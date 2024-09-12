import * as React from 'react';

export type AutocompleteProps = {
    label?: string;
    name: string;
    placeholder?: string;
    helperText?: string;
    defaultValue?: string;
    data: Array<any>;
    getOptionValue: (req: any) => any;
    getOptionLabel: (req: any) => any;
    getOptionDisabled?: (req: any) => boolean;
    renderOption: (req: any) => React.Node;
    disabled?: boolean;
    error?: boolean;
    InputProps?: any;
    onChange: Function;
    onInputChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>;
    tooltip?: string;
    classes?: {
        container?: string;
        optionsContainer?: string;
        optionContainer?: string;
    };
};

export type Autocomplete = React.FunctionComponent<AutocompleteProps>;
