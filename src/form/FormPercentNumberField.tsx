/**
 * @prettier
 */
import { useContext, useEffect, useState } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'src/components/Input';
import { FormContext } from 'src/form/Form';
import classes from 'src/styles/form/formPercentNumberField.module.css';
import { InputProps } from 'src/types/components/Input';
import { FormPercentNumberFieldProps } from 'src/types/form/FormPercentNumberField';
import { getError } from 'src/utils/form/getError';
import { transformPercentNumberInput } from 'src/utils/form/transformPercentNumberInput';
import { transformPercentNumberOutput } from 'src/utils/form/transformPercentNumberOutput';

export function FormPercentNumberField({ name, label, helperText, defaultValue, disabled, tooltip, required, min, max, rules, inputProps }: FormPercentNumberFieldProps): React.ReactElement {
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
                <NumericInput
                    {...inputProps}
                    classes={{ input: classes.input }}
                    inputRef={ref}
                    label={required ? `${label}*` : label}
                    onBlur={onBlur}
                    value={transformPercentNumberInput(value)}
                    onChange={(value: string) => {
                        onChange(transformPercentNumberOutput(value));
                    }}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    aria-label={label ? undefined : name}
                    tooltip={tooltip}
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    rightAdornment={'%'}
                    inputMode='numeric'
                    type='number'
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

function NumericInput({ value, onChange, ...props }: InputProps): React.ReactElement {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (!!value && !inputValue) setInputValue(value);
    }, [value, inputValue]);

    const handleChange = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(value);
        onChange?.(value, e);
    };

    return <Input {...props} onChange={handleChange} value={inputValue} />;
}
