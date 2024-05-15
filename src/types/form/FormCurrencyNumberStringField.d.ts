/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { InputProps } from 'src/types/components/Input';

export type FormCurrencyNumberStringFieldProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: string;
    placeHolder?: string;
    disabled?: boolean;
    maximumDigits?: number;
    required?: ValidationRule<boolean>;
    min?: ValidationRule<number>;
    max?: ValidationRule<number>;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: InputProps;
};

export type FormCurrencyNumberStringField = React.FunctionComponent<FormCurrencyNumberStringFieldProps>;
