/**
 * @prettier
 */
import * as React from 'react';
import type { ValidationRule } from 'react-hook-form';

export type FormDatePickerProps = {
    label?: string;
    placeholder?: string;
    name: string;
    helperText?: string;
    id?: string;
    disabled?: boolean;
    error?: boolean;
    defaultValue?: Date;
    required?: ValidationRule<boolean>;
    rules?: Record<string, ValidationRule<any>>;
    classes?: {
        inputContainer?: string;
        input?: string;
    };
    muiTheme?: any;
};

export type FormDatePicker = React.FunctionComponent<FormDatePickerProps>;
