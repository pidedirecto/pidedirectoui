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
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';

export function FormTextField({ name, label, helperText, defaultValue, disabled, tooltip, required, rules, inputProps, placeholder }: FormTextFieldProps): React.ReactElement {
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
                    label={getFormFieldLabel(required, label)}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder}
                    onChange={(value: string) => {
                        onChange(value);
                    }}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    aria-label={label ? undefined : name}
                    tooltip={tooltip}
                    error={!!error}
                    helperText={error?.message ?? helperText}
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
