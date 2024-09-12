import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { TextAreaProps } from 'src/types/components/TextArea';
import { OptionalKeys } from 'src/utils/type/OptionalKeys';

export type FormTextAreaFieldProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: string;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: OptionalKeys<TextAreaProps>;
};

export type FormTextAreaField = React.FunctionComponent<FormTextAreaFieldProps>;
