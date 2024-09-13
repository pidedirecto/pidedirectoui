import * as React from 'react';
import { type UseFormMethods } from 'react-hook-form';

export type FormProps = {
    form: UseFormMethods<Record<string, any>>;
    onSubmit: (formValues: any) => void | Promise<void>;
    disabled?: boolean;
    id?: string;
    disableSubmitOnEnterKey?: boolean;
    classes?: {
        form: string;
    };
    children?: React.ReactNode;
};

export type Form = React.FunctionComponent<FormProps>;
