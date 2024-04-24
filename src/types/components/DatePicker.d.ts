/**
 * @prettier
 */
import * as React from 'react';

export type DatePickerProps = {
    label?: string;
    placeholder?: string;
    name: string;
    helperText?: string;
    id?: string;
    disabled?: boolean;
    error?: boolean;
    value: Date;
    onChange: (value: Date | undefined) => void | Promise<void>;
    classes?: {
        inputContainer?: string;
        input?: string;
    };
};

export type DatePicker = React.FunctionComponent<DatePickerProps>;
