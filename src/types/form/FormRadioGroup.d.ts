
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { RadioGroupProps } from 'src/types/components/RadioGroup';

export type FormRadioGroupProps = {
    name: string;
    label?: string;
    defaultValue?: boolean;
    required?: ValidationRule<boolean>;
    tooltip?: string;
    helperText?: string;
    rules?: Record<string, ValidationRule<any>>;
    orientation?: RadioGroupProps['orientation'];
    children: React.ReactNode;
};

export type FormRadioGroup = React.FunctionComponent<FormRadioGroupProps>;
