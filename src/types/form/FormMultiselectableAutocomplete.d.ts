import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';

export type FormMultiselectableAutocompleteProps = {
    label?: string;
    name: string;
    placeholder?: string;
    helperText?: string;
    productsSelectedLabel?: string;
    selectAllOptionLabel?: string;
    defaultValue?: Array<string>;
    data: Array<any>;
    getOptionValue: (req: any) => any;
    getOptionLabel: (req: any) => any;
    getOptionDisabled?: (req: any) => boolean;
    renderOption: (req: any) => React.Node;
    disabled?: boolean;
    selectAllOption?: boolean;
    required?: ValidationRule<boolean>;
    classes?: {
        optionsContainer?: string;
        optionContainer?: string;
    };
    rules?: Record<string, ValidationRule<any>>;
    variant?: 'detailed';
};

export type FormMultiselectableAutocomplete = React.FunctionComponent<FormMultiselectableAutocompleteProps>;
