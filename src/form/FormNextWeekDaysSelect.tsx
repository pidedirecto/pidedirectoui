import moment from 'moment';
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { PickersProviderContext } from 'src/components/PickersProvider';
import { Select } from 'src/components/Select';
import { Text } from 'src/components/Text';
import { FormContext } from 'src/form/Form';
import classes from 'src/styles/form/formNextWeekDaysSelect.module.css';
import { FormNextWeekDaysSelectProps } from 'src/types/form/FormNextWeekDaysSelect';
import { getError } from 'src/utils/form/getError';

export function FormNextWeekDaysSelect({ name, label, defaultValue, disabled, tooltip, required, multiselectable, preventClose, placeholder }: FormNextWeekDaysSelectProps): React.ReactElement {
    const {
        errors,
        control,
        formState: { isSubmitting },
    } = useFormContext();
    const formContext = useContext(FormContext);
    const pickersProviderContext = useContext(PickersProviderContext);

    const momentInstance: typeof moment = pickersProviderContext.momentInstance ?? moment;

    const error = getError(errors, name);
    const errorMessage = getError(errors, name)?.message;

    const options = Array.from({ length: 7 }, (_, idx) => {
        const dayMoment = momentInstance().add(idx, 'day').set('hours', 0).set('minutes', 0).set('seconds', 0).set('milliseconds', 0);
        const dayName = idx === 0 || idx === 1 ? dayMoment.calendar().split(' ')[0] : dayMoment.format('dddd');
        return {
            value: dayMoment.toDate(),
            label: `${dayName} ${dayMoment.format('DD MMM')}`,
            content: (
                <div className={classes.optionContainer}>
                    <Text>{dayName}</Text>
                    <Text size='small' className={classes.optionSmallText}>
                        {dayMoment.format('DD MMM')}
                    </Text>
                </div>
            ),
        };
    });

    return (
        <Controller
            control={control}
            name={name}
            render={({ onChange, value, name }) => (
                <Select
                    value={value}
                    label={required && !!label ? `${label}*` : label}
                    placeholder={placeholder}
                    options={options}
                    multiselectable={multiselectable}
                    preventClose={preventClose}
                    onChange={(value: any) => {
                        onChange(value);
                    }}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    tooltip={tooltip}
                    helperText={errorMessage}
                    error={!!error}
                    classes={{ dropdown: classes.select }}
                />
            )}
            defaultValue={defaultValue ?? null}
            rules={{
                required,
            }}
        />
    );
}
