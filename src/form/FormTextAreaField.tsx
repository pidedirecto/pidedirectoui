/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextArea } from 'src/components/TextArea';
import { FormContext } from 'src/form/Form';
import { FormTextAreaFieldProps } from 'src/types/form/FormTextAreaField';
import { getError } from 'src/utils/form/getError';

export function FormTextAreaField({ name, label, helperText, defaultValue, disabled, tooltip, required, rules, inputProps }: FormTextAreaFieldProps): React.ReactElement {
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
                <TextArea
                    {...inputProps}
                    inputRef={ref}
                    label={required ? `${label}*` : label}
                    onBlur={onBlur}
                    value={value ?? ''}
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
