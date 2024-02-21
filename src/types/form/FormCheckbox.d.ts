/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { CheckboxProps } from 'src/types/components/Checkbox';

export type FormCheckboxProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: CheckboxProps;
};

export type FormCheckbox = React.FunctionComponent<FormCheckboxProps>;
