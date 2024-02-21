/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from 'src/components/Checkbox';
import { FormContext } from 'src/form/Form';
import { FormCheckboxProps } from 'src/types/form/FormCheckbox';
import { getError } from 'src/utils/form/getError';

export function FormCheckbox({ name, label, helperText, defaultValue, disabled, tooltip, required, rules, inputProps }: FormCheckboxProps): React.ReactElement {
    const {
        errors,
        control,
        formState: { isSubmitting },
    } = useFormContext();
    const formContext = useContext(FormContext);

    const errorMessage = getError(errors, name)?.message;

    return (
        <Controller
            control={control}
            name={name}
            render={({ onChange, onBlur, value, name, ref }) => (
                <Checkbox
                    {...inputProps}
                    inputRef={ref}
                    label={required ? `${label}*` : label}
                    onBlur={onBlur}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChange(e.target.checked);
                    }}
                    checked={value}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    aria-label={label ? undefined : name}
                    tooltip={tooltip}
                    error={!!errorMessage}
                    helperText={errorMessage ?? helperText}
                />
            )}
            defaultValue={defaultValue ?? false}
            rules={{
                required,
                ...rules,
            }}
        />
    );
}
