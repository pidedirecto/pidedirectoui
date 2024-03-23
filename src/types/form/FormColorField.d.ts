/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { InputProps } from 'src/types/components/Input';

export type FormColorFieldProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: InputProps;
};

export type FormColorField = React.FunctionComponent<FormColorFieldProps>;
