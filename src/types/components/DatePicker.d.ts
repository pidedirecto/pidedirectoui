import * as React from 'react';

export type DatePickerProps = {
    label?: string;
    placeholder?: string;
    name: string;
    helperText?: string;
    id?: string;
    disabled?: boolean;
    error?: boolean;
    value: Date | undefined | null;
    minDate?: Date;
    maxDate?: Date;
    onChange: (value: Date | undefined) => void | Promise<void>;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | Promise<void>;
    inputRef?: React.Ref<HTMLInputElement>;
    classes?: {
        inputContainer?: string;
        input?: string;
    };
};

export type DatePicker = React.FunctionComponent<DatePickerProps>;
