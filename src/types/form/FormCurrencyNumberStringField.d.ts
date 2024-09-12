import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { CountryCode } from 'src/constants/CountryCode';
import { InputProps } from 'src/types/components/Input';
import { OptionalKeys } from 'src/utils/type/OptionalKeys';

export type FormCurrencyNumberStringFieldProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    maximumDigits?: number;
    required?: ValidationRule<boolean>;
    min?: ValidationRule<number>;
    max?: ValidationRule<number>;
    country?: CountryCode;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: OptionalKeys<InputProps>;
};

export type FormCurrencyNumberStringField = React.FunctionComponent<FormCurrencyNumberStringFieldProps>;
