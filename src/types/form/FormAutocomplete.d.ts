/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';

export type FormAutocompleteProps = {
    label?: string;
    name: string;
    placeholder?: string;
    helperText?: string;
    defaultValue?: Array<string>;
    data: Array<any>;
    getOptionValue: (req: any) => any;
    getOptionLabel: (req: any) => any;
    getOptionDisabled?: (req: any) => boolean;
    renderOption: (req: any) => React.Node;
    onInputChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    classes?: {
        optionsContainer?: string;
        optionContainer?: string;
    };
    rules?: Record<string, ValidationRule<any>>;
    variant?: 'detailed';
};

export type FormAutocomplete = React.FunctionComponent<FormAutocompleteProps>;
