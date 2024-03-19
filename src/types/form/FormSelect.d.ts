/**
 * @prettier
 */
import * as React from 'react';

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
    required?: boolean;
    preventClose?: boolean;
    error?: boolean;
    defaultValue?: any | Array<any>;
    tooltip?: string;
};

export type FormSelect = React.FunctionComponent<FormSelectProps>;
