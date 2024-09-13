import * as React from 'react';

export type RadioGroupProps = {
    value: any;
    name: string;
    label?: string;
    tooltip?: string;
    helperText?: string;
    error?: boolean;
    children: React.ReactNode;
    onChange: (value: any) => void | Promise<void>;
    orientation?: 'horizontal' | 'vertical';
    classes?: {
        container?: string;
    };
};

export type RadioGroup = React.FunctionComponent<RadioGroupProps>;
