/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DateTimePicker } from 'src/components/DateTimePicker';
import { FormContext } from 'src/form/Form';
import { FormDateTimePickerProps } from 'src/types/form/FormDateTimePicker';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';

export function FormDateTimePicker({ name, minDate, maxDate, label, helperText, defaultValue, disabled, required, rules, classes }: FormDateTimePickerProps): React.ReactElement {
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
                <DateTimePicker
                    inputRef={ref}
                    label={getFormFieldLabel(required, label)}
                    value={value}
                    onChange={(value: Date | undefined) => {
                        onChange(value ?? null);
                    }}
                    name={name}
                    onBlur={onBlur}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    classes={classes}
                    minDate={minDate}
                    maxDate={maxDate}
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
