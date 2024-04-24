/**
 * @prettier
 */
import MomentUtils from '@date-io/moment';
import { DateTimePicker as MuiDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { useCreateUserTypedInputLogEvent } from 'src/services/logEvent/useCreateUserTypedInputLogEvent';
import classes from 'src/styles/dateTimePicker.module.css';
import { classNames } from 'src/utils/css/classNames';
import 'src/utils/configureMoment';
import { ThemeProvider } from '@material-ui/core';
import moment from 'moment/moment';
import { DateTimePickerProps } from 'src/types/components/DateTimePicker';
import { useConfigureMuiTheme } from 'src/utils/mui/useConfigureMuiTheme';

export function DateTimePicker({ value, onChange, onBlur, label, placeholder, name, id, helperText, disabled, error, inputRef, classes: classesProp }: DateTimePickerProps): React.ReactElement {
    const muiTheme = useConfigureMuiTheme();

    const createUserTypedInputLogEvent = useCreateUserTypedInputLogEvent();

    const handleChange = (momentDate: MaterialUiPickersDate) => {
        onChange(momentDate?.toDate());
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        createUserTypedInputLogEvent(label ?? name, value?.toISOString() ?? '');
        onBlur?.(e);
    };

    return (
        <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
            <ThemeProvider theme={muiTheme}>
                <div className={classes.container}>
                    {!!label && (
                        <Label error={error} htmlFor={id ?? `${name}-input`} disabled={disabled}>
                            {label}
                        </Label>
                    )}
                    <MuiDateTimePicker
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
            </ThemeProvider>
        </MuiPickersUtilsProvider>
    );
}
