
import * as React from 'react';
import type { ValidationRule } from 'react-hook-form';

export type FormDateTimePickerProps = {
    label?: string;
    placeholder?: string;
    name: string;
    minDate?: Date;
    maxDate?: Date;
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
};

export type FormDateTimePicker = React.FunctionComponent<FormDateTimePickerProps>;
