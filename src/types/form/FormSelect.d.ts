import * as React from 'react';
import type { ValidationRule } from 'react-hook-form';

export type FormSelectProps = {
    label?: string;
    placeholder?: string;
    helperText?: string;
    name: string;
    options: Array<{
        value: any;
        label: string;
        content?: React.ReactNode;
    }>;
    classes?: {
        item?: string;
        button?: string;
    };
    multiselectable?: boolean;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    preventClose?: boolean;
    error?: boolean;
    defaultValue?: any | Array<any>;
    tooltip?: string;
};

export type FormSelect = React.FunctionComponent<FormSelectProps>;
