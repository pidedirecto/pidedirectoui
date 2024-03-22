/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { InputProps } from 'src/types/components/Input';

export type FormEmailFieldProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    emailErrorMessage?: string;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: InputProps;
};

export type FormEmailField = React.FunctionComponent<FormEmailFieldProps>;
