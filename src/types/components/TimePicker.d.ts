import * as React from 'react';

export type TimePickerProps = {
    label?: string;
    placeholder?: string;
    name: string;
    helperText?: string;
    id?: string;
    disabled?: boolean;
    error?: boolean;
    value: Date | undefined | null;
    onChange: (value: Date | undefined, hours: string | undefined) => void | Promise<void>;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | Promise<void>;
    inputRef?: React.Ref<HTMLInputElement>;
    classes?: {
        inputContainer?: string;
        input?: string;
    };
};

export type TimePicker = React.FunctionComponent<TimePickerProps>;
