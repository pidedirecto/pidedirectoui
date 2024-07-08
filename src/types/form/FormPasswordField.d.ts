/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { InputProps } from 'src/types/components/Input';
import { OptionalKeys } from 'src/utils/type/OptionalKeys';

export type FormPasswordFieldProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: OptionalKeys<InputProps>;
};

export type FormPasswordField = React.FunctionComponent<FormPasswordFieldProps>;
