/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'src/components/Input';
import { FormContext } from 'src/form/Form';
import classes from 'src/styles/form/formCurrencyNumberStringField.module.css';
import { FormCurrencyNumberStringFieldProps } from 'src/types/form/FormCurrencyNumberStringField';
import { getError } from 'src/utils/form/getError';
import { transformCurrencyNumberStringInput } from 'src/utils/form/transformCurrencyNumberStringInput';
import { transformCurrencyNumberStringOutput } from 'src/utils/form/transformCurrencyNumberStringOutput';

export function FormCurrencyNumberStringField({
    name,
    label,
    helperText,
    defaultValue,
    disabled,
    tooltip,
    required,
    rules,
    maximumDigits,
    inputProps,
}: FormCurrencyNumberStringFieldProps): React.ReactElement {
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
                    classes={{ input: classes.input }}
                    inputRef={ref}
                    label={required ? `${label}*` : label}
                    onBlur={onBlur}
                    value={transformCurrencyNumberStringInput(value, { maximumDigits })}
                    onChange={(value: string) => {
                        onChange(transformCurrencyNumberStringOutput(value, { maximumDigits }));
                    }}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    aria-label={label ? undefined : name}
                    tooltip={tooltip}
                    error={!!error}
                    helperText={error?.errorMessage ?? helperText}
                    leftAdornment={'$'}
                    inputMode='numeric'
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
