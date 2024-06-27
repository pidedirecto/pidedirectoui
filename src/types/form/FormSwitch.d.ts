/**
 * @prettier
 */
import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { SwitchProps } from 'src/types/components/Switch';
import { OptionalKeys } from 'src/utils/type/OptionalKeys';

export type FormSwitchProps = {
    name: string;
    label?: string;
    helperText?: string;
    defaultValue?: boolean;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    tooltip?: string;
    rules?: Record<string, ValidationRule<any>>;
    inputProps?: OptionalKeys<SwitchProps>;
};

export type FormSwitch = React.FunctionComponent<FormSwitchProps>;
