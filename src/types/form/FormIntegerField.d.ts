
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { InputProps } from 'src/types/components/Input';
import { OptionalKeys } from 'src/utils/type/OptionalKeys';

export type FormIntegerFieldProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: number;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    min?: ValidationRule<number>;
    max?: ValidationRule<number>;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: OptionalKeys<InputProps>;
};

export type FormIntegerField = React.FunctionComponent<FormIntegerFieldProps>;
