/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'src/components/Input';
import { FormContext } from 'src/form/Form';
import { FormTextFieldProps } from 'src/types/form/FormTextField';
import { getError } from 'src/utils/form/getError';

export function FormTextField({ name, label, helperText, defaultValue, disabled, tooltip, required, rules, inputProps }: FormTextFieldProps): React.ReactElement {
    const {
        errors,
        control,
        formState: { isSubmitting },
    } = useFormContext();
    const formContext = useContext(FormContext);

    const error = getError(errors, name);

    return (
        <Controller
            control={control}
            name={name}
            render={({ onChange, onBlur, value, name, ref }) => (
                <Input
                    {...inputProps}
                    inputRef={ref}
                    label={required ? `${label}*` : label}
                    onBlur={onBlur}
                    value={value}
                    onChange={(value: string) => {
                        onChange(value);
                    }}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    aria-label={label ? undefined : name}
                    tooltip={tooltip}
                    error={!!error}
                    helperText={error?.errorMessage ?? helperText}
                />
            )}
            defaultValue={defaultValue ?? null}
            rules={{
                required,
                ...rules,
            }}
        />
    );
}
