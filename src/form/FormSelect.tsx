import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Select } from 'src/components/Select';
import { FormContext } from 'src/form/Form';
import { FormSelectProps } from 'src/types/form/FormSelect';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';

export function FormSelect({
    name,
    label,
    defaultValue,
    disabled,
    tooltip,
    required,
    options,
    multiselectable,
    preventClose,
    placeholder,
    onChange: onChangeProp,
}: FormSelectProps): React.ReactElement {
    const {
        errors,
        control,
        formState: { isSubmitting },
    } = useFormContext();
    const formContext = useContext(FormContext);

    const error = getError(errors, name);
    const errorMessage = getError(errors, name)?.message;

    const formatValue = (value: any) => {
        if (!multiselectable) return value;
        return value.length ? value : null;
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ onChange, value, name }) => (
                <Select
                    value={value}
                    label={getFormFieldLabel(required, label)}
                    placeholder={placeholder}
                    options={options}
                    multiselectable={multiselectable}
                    preventClose={preventClose}
                    onChange={(value: any) => {
                        onChange(formatValue(value));
                        onChangeProp?.(value);
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
