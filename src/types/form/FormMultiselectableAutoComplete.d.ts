/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';

export type FormMultiselectableAutoCompleteProps = {
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
    error?: boolean;
    selectAllOption?: boolean;
    required?: ValidationRule<boolean>;
    InputProps?: any;
    onChange: Function;
    tooltip?: string;
    classes?: {
        optionsContainer?: string;
        optionContainer?: string;
    };
    selectedItems: Array<string>;
    rules?: Record<string, ValidationRule<any>>;
};

export type FormMultiselectableAutoComplete = React.FunctionComponent<FormMultiselectableAutoCompleteProps>;
