/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Simulate } from 'react-dom/test-utils';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from 'src/components/DatePicker';
import { FormContext } from 'src/form/Form';
import { FormDatePickerProps } from 'src/types/form/FormDatePicker';
import { getError } from 'src/utils/form/getError';

import play = Simulate.play;

export function FormDatePicker({ name, label, helperText, defaultValue, disabled, required, rules, placeholder, classes }: FormDatePickerProps): React.ReactElement {
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
            render={({ onChange, value, onBlur, name, ref }) => (
                <DatePicker
                    inputRef={ref}
                    label={required ? `${label}*` : label}
                    value={value}
                    onChange={(value: Date | undefined) => {
                        onChange(value ?? null);
                    }}
                    name={name}
                    onBlur={onBlur}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    placeholder={placeholder}
                    classes={classes}
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
