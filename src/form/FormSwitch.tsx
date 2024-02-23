/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Switch } from 'src/components/Switch';
import { FormContext } from 'src/form/Form';
import { FormSwitchProps } from 'src/types/form/FormSwitch';
import { getError } from 'src/utils/form/getError';

export function FormSwitch({ name, label, helperText, defaultValue, disabled, tooltip, required, rules, inputProps }: FormSwitchProps): React.ReactElement {
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
                <Switch
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
