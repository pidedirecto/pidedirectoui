/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';

export type FormRadioGroupProps = {
    name: string;
    label?: string;
    defaultValue?: boolean;
    required?: ValidationRule<boolean>;
    tooltip?: string;
    helperText?: string;
    rules?: Record<string, ValidationRule<any>>;
    children: React.ReactNode;
};

export type FormRadioGroup = React.FunctionComponent<FormRadioGroupProps>;
