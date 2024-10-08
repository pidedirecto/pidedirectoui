import { DateTimePicker as MuiDateTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { useCreateUserTypedInputLogEvent } from 'src/services/logEvent/useCreateUserTypedInputLogEvent';
import classes from 'src/styles/dateTimePicker.module.css';
import { classNames } from 'src/utils/css/classNames';
import 'src/utils/configureMoment';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import { useContext } from 'react';
import { PickersProviderContext } from 'src/components/PickersProvider';
import { DateTimePickerProps } from 'src/types/components/DateTimePicker';

export function DateTimePicker({
    value,
    minDate,
    maxDate,
    onChange,
    onBlur,
    label,
    placeholder,
    name,
    id,
    helperText,
    disabled,
    error,
    inputRef,
    dateFormat,
    classes: classesProp,
}: DateTimePickerProps): React.ReactElement {
    const context = useContext(PickersProviderContext);
    const createUserTypedInputLogEvent = useCreateUserTypedInputLogEvent();

    const handleChange = (momentDate: MaterialUiPickersDate) => {
        onChange(momentDate?.toDate());
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        createUserTypedInputLogEvent(label ?? name, value?.toISOString() ?? '');
        onBlur?.(e);
    };

    return (
        <MuiThemeProvider theme={context.muiTheme}>
            <MuiPickersUtilsProvider utils={MomentUtils} libInstance={context.momentInstance ?? moment}>
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
                        minDate={minDate}
                        maxDate={maxDate}
                        format={dateFormat ?? 'ddd ll'}
                        autoOk
                        fullWidth
                        variant='inline'
                    />
                    {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
                </div>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
}
