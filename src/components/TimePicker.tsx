/**
 * @prettier
 */
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, TimePicker as MuiTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { useCreateUserTypedInputLogEvent } from 'src/services/logEvent/useCreateUserTypedInputLogEvent';
import classes from 'src/styles/timePicker.module.css';
import { classNames } from 'src/utils/css/classNames';
import 'src/utils/configureMoment';
import { ThemeProvider } from '@material-ui/core';
import moment from 'moment/moment';
import { ClockIcon } from 'src/icons/ClockIcon';
import { TimePickerProps } from 'src/types/components/TimePicker';
import { useConfigureMuiTheme } from 'src/utils/mui/useConfigureMuiTheme';

export function TimePicker({ value, onChange, onBlur, label, placeholder, name, id, helperText, disabled, error, inputRef, classes: classesProp }: TimePickerProps): React.ReactElement {
    const muiTheme = useConfigureMuiTheme();

    const createUserTypedInputLogEvent = useCreateUserTypedInputLogEvent();

    const handleChange = (momentDate: MaterialUiPickersDate) => {
        onChange(momentDate?.toDate(), momentDate?.format('HH:mm'));
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
                    <MuiTimePicker
                        inputRef={inputRef}
                        placeholder={placeholder}
                        name={name}
                        disabled={disabled}
                        error={error}
                        InputProps={
                            {
                                startAdornment: <ClockIcon />,
                                className: classNames(classes.inputContainer, classesProp?.inputContainer),
                                'data-error': error,
                            } as any
                        }
                        inputProps={{ className: classNames(classes.input, classesProp?.input), id: id ?? `${name}-input` }}
                        onChange={handleChange}
                        onBlur={handleInputBlur}
                        value={value}
                        format='LT'
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