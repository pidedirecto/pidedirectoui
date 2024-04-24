/**
 * @prettier
 */
import MomentUtils from '@date-io/moment';
import { DatePicker as MuiDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import classes from 'src/styles/datePicker.module.css';
import { DatePickerProps } from 'src/types/components/DatePicker';
import { classNames } from 'src/utils/css/classNames';

export function DatePicker({ value, onChange, label, placeholder, name, id, helperText, disabled, error, classes: classesProp }: DatePickerProps): React.ReactElement {
    const handleChange = (momentDate: MaterialUiPickersDate) => {
        onChange(momentDate?.toDate());
    };

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <div className={classes.container}>
                {!!label && (
                    <Label error={error} htmlFor={id ?? `${name}-input`} disabled={disabled}>
                        {label}
                    </Label>
                )}
                <MuiDatePicker
                    placeholder={placeholder}
                    name={name}
                    disabled={disabled}
                    error={error}
                    InputProps={{ className: classNames(classes.inputContainer, classesProp?.inputContainer), 'data-error': error } as any}
                    inputProps={{ className: classNames(classes.input, classesProp?.input), id: id ?? `${name}-input` }}
                    onChange={handleChange}
                    value={value}
                    format='ddd ll'
                    autoOk
                    fullWidth
                    variant='inline'
                />
                {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
            </div>
        </MuiPickersUtilsProvider>
    );
}
