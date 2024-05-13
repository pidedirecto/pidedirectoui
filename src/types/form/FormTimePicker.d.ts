/**
 * @prettier
 */
import * as React from 'react';
import type { ValidationRule } from 'react-hook-form';

export type FormTimePickerProps = {
    label?: string;
    placeholder?: string;
    name: string;
    helperText?: string;
    id?: string;
    disabled?: boolean;
    error?: boolean;
    hoursAsValue?: boolean;
    defaultValue?: Date;
    required?: ValidationRule<boolean>;
    rules?: Record<string, ValidationRule<any>>;
    classes?: {
        inputContainer?: string;
        input?: string;
    };
    muiTheme?: any;
    momentInstance?: any;
};

export type FormTimePicker = React.FunctionComponent<FormTimePickerProps>;
