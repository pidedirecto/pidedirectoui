/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';

export type FormSelectableListProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: any;
    options: Array<{ value: any; label: string; content?: React.Node }>;
    disabled?: boolean;
    searchable?: boolean;
    virtualized?: boolean;
    height?: number;
    variant?: 'underline';
    required?: ValidationRule<boolean>;
    rules?: Record<string, ValidationRule<any>>;
    multiselectable?: boolean;
    classes?: {
        listContainer?: string;
        row?: string;
        label?: string;
    };
};

export type FormSelectableList = React.FunctionComponent<FormSelectableListProps>;
