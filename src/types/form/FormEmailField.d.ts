
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { InputProps } from 'src/types/components/Input';
import { OptionalKeys } from 'src/utils/type/OptionalKeys';

export type FormEmailFieldProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: string;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    emailErrorMessage?: string;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: OptionalKeys<InputProps>;
};

export type FormEmailField = React.FunctionComponent<FormEmailFieldProps>;
