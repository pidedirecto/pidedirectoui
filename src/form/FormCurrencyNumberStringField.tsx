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
import { classNames } from 'src/utils/css/classNames';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';
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
    min,
    max,
    country,
    rules,
    placeholder,
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
                    classes={{ ...(inputProps?.classes ?? {}), input: classNames(classes.input, inputProps?.classes?.input) }}
                    inputRef={ref}
                    label={getFormFieldLabel(required, label)}
                    onBlur={onBlur}
                    value={transformCurrencyNumberStringInput(value, { country, maximumFractionDigits: maximumDigits })}
                    onChange={(value: string) => {
                        onChange(transformCurrencyNumberStringOutput(value, { country, maximumFractionDigits: maximumDigits }));
                    }}
                    placeholder={placeholder}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    aria-label={label ? undefined : name}
                    tooltip={tooltip}
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    leftAdornment={'$'}
                    inputMode='numeric'
                />
            )}
            defaultValue={defaultValue ?? null}
            rules={{
                required,
                min,
                max,
                ...rules,
            }}
        />
    );
}
