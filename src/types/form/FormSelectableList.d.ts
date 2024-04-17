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
    options: Array<{ value: any; content: React.Node }>;
    disabled?: boolean;
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
