/**
 * @prettier
 */
import * as React from 'react';

export type FormHiddenFieldProps = {
    name: string;
    defaultValue?: string;
};

export type FormHiddenField = React.FunctionComponent<FormHiddenFieldProps>;
