/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ScheduleDaySelect } from 'src/components/ScheduleDaySelect';
import { FormContext } from 'src/form/Form';
import { FormScheduleDaySelectProps } from 'src/types/form/FormScheduleDaySelect';
import { getError } from 'src/utils/form/getError';

export function FormScheduleDaySelect({
    name,
    label,
    scheduleLabel,
    defaultValue,
    disabled,
    required,
    daysTranslations,
    rules,
    muiTheme,
    momentInstance,
}: FormScheduleDaySelectProps): React.ReactElement {
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
            render={({ onChange, value }) => (
                <ScheduleDaySelect
                    label={required ? `${label}*` : label}
                    scheduleLabel={scheduleLabel}
                    daysTranslations={daysTranslations}
                    onChange={(openingHours) => {
                        onChange(openingHours);
                    }}
                    value={value}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    error={!!error}
                    muiTheme={muiTheme}
                    momentInstance={momentInstance}
                />
            )}
            defaultValue={defaultValue ?? '24/7'}
            rules={{
                required,
                ...rules,
            }}
        />
    );
}
