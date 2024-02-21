/**
 * @prettier
 */
import * as React from 'react';
import { type UseFormMethods } from 'react-hook-form';

export type FormProps = {
    form: UseFormMethods<Record<string, any>>;
    onSubmit: (formValues: Record<string, any>) => void;
    disabled?: boolean;
    disableSubmitOnEnterKey?: boolean;
    classes?: {
        form: string;
    };
    children?: React.ReactNode;
};

export type Form = React.FunctionComponent<FormProps>;
