/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TimePicker } from 'src/components/TimePicker';
import { FormContext } from 'src/form/Form';
import { FormTimePickerProps } from 'src/types/form/FormTimePicker';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';

export function FormTimePicker({ name, label, helperText, defaultValue, disabled, required, hoursAsValue, rules, classes }: FormTimePickerProps): React.ReactElement {
    const {
        errors,
        control,
        formState: { isSubmitting },
    } = useFormContext();
    const formContext = useContext(FormContext);

    const error = getError(errors, name);

    const formatHoursToDate = (value: string | undefined) => {
        if (!value) return;

        const [hours, minutes] = value.split(':');
        if (!hours || !minutes) return;

        const newValue = new Date();
        newValue.setHours(Number(hours), Number(minutes));

        return newValue;
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ onChange, value, onBlur, name, ref }) => (
                <TimePicker
                    inputRef={ref}
                    label={getFormFieldLabel(required, label)}
                    value={hoursAsValue ? formatHoursToDate(value) : value}
                    onChange={(value: Date | undefined, hours: string | undefined) => {
                        onChange(hoursAsValue ? hours ?? null : value ?? null);
                    }}
                    name={name}
                    onBlur={onBlur}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    error={!!error}
                    helperText={error?.message ?? helperText}
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
