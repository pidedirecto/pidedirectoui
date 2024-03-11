/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Select } from 'src/components/Select';
import { FormContext } from 'src/form/Form';
import { FormSelectProps } from 'src/types/form/FormSelect';
import { getError } from 'src/utils/form/getError';

export function FormSelect({ name, label, defaultValue, disabled, tooltip, required, options, multiselectable, preventClose, placeholder }: FormSelectProps): React.ReactElement {
    const {
        errors,
        control,
        formState: { isSubmitting },
    } = useFormContext();
    const formContext = useContext(FormContext);

    const errorMessage = getError(errors, name)?.message;
    const error = getError(errors, name);

    return (
        <Controller
            control={control}
            name={name}
            render={({ onChange, value, name }) => (
                <Select
                    value={value}
                    label={required && !!label ? `${label}*` : label}
                    placeholder={placeholder}
                    options={options}
                    multiselectable={multiselectable}
                    preventClose={preventClose}
                    onChange={(value: any) => {
                        onChange(value);
                    }}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    tooltip={tooltip}
                    helperText={errorMessage}
                    error={!!error}
                />
            )}
            defaultValue={defaultValue ?? null}
            rules={{
                required,
            }}
        />
    );
}
