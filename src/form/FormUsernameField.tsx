/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'src/components/Input';
import { FormContext } from 'src/form/Form';
import { FormUsernameFieldProps } from 'src/types/form/FormUsernameField';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';

export function FormUsernameField({ name, label, helperText, defaultValue, disabled, tooltip, required, rules, inputProps, placeholder }: FormUsernameFieldProps): React.ReactElement {
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
                        onChange(value.trim());
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
