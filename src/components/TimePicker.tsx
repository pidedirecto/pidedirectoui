import { TimePicker as MuiTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { useCreateUserTypedInputLogEvent } from 'src/services/logEvent/useCreateUserTypedInputLogEvent';
import classes from 'src/styles/timePicker.module.css';
import { classNames } from 'src/utils/css/classNames';
import 'src/utils/configureMoment';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment/moment';
import { useContext } from 'react';
import { PickersProviderContext } from 'src/components/PickersProvider';
import { ClockIcon } from 'src/icons/ClockIcon';
import { TimePickerProps } from 'src/types/components/TimePicker';

export function TimePicker({ value, onChange, onBlur, label, placeholder, name, id, helperText, disabled, error, inputRef, classes: classesProp }: TimePickerProps): React.ReactElement {
    const context = useContext(PickersProviderContext);
    const createUserTypedInputLogEvent = useCreateUserTypedInputLogEvent();

    const handleChange = (momentDate: MaterialUiPickersDate) => {
        onChange(momentDate?.toDate(), momentDate?.format('HH:mm'));
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
                        value={value || null}
                        format='LT'
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
