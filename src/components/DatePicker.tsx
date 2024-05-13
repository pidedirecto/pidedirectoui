/**
 * @prettier
 */
import { DatePicker as MuiDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { useCreateUserTypedInputLogEvent } from 'src/services/logEvent/useCreateUserTypedInputLogEvent';
import classes from 'src/styles/datePicker.module.css';
import { DatePickerProps } from 'src/types/components/DatePicker';
import { classNames } from 'src/utils/css/classNames';
import 'src/utils/configureMoment';

export function DatePicker({ value, onChange, onBlur, label, placeholder, name, id, helperText, disabled, error, inputRef, classes: classesProp }: DatePickerProps): React.ReactElement {
    const createUserTypedInputLogEvent = useCreateUserTypedInputLogEvent();

    const handleChange = (momentDate: MaterialUiPickersDate) => {
        onChange(momentDate?.toDate());
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        createUserTypedInputLogEvent(label ?? name, value?.toISOString() ?? '');
        onBlur?.(e);
    };

    return (
        <div className={classes.container}>
            {!!label && (
                <Label error={error} htmlFor={id ?? `${name}-input`} disabled={disabled}>
                    {label}
                </Label>
            )}
            <MuiDatePicker
                inputRef={inputRef}
                placeholder={placeholder}
                name={name}
                disabled={disabled}
                error={error}
                InputProps={{ className: classNames(classes.inputContainer, classesProp?.inputContainer), 'data-error': error } as any}
                inputProps={{ className: classNames(classes.input, classesProp?.input), id: id ?? `${name}-input` }}
                onChange={handleChange}
                onBlur={handleInputBlur}
                value={value}
                format='ddd ll'
                autoOk
                fullWidth
                variant='inline'
            />
            {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
        </div>
    );
}
