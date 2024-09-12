
import * as React from 'react';
import type { ValidationRule } from 'react-hook-form';

export type FormNextWeekDaysSelectProps = {
    label?: string;
    placeholder?: string;
    helperText?: string;
    name: string;
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

export type FormNextWeekDaysSelect = React.FunctionComponent<FormNextWeekDaysSelectProps>;
