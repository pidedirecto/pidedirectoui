/**
 * @prettier
 */
import * as React from 'react';
import { useContext } from 'react';
import { Label } from 'src/components/Label';
import { RadioGroupContext } from 'src/components/RadioGroup';
import { Tooltip } from 'src/components/Tooltip';
import { useCreateUserClickedRadioLogEvent } from 'src/services/logEvent/useCreateUserClickedRadioLogEvent';
import classes from 'src/styles/radio.module.css';
import { RadioProps } from 'src/types/components/Radio';
import { classNames } from 'src/utils/css/classNames';

export function Radio({ value, label, checked, tooltip, disabled, onChange, inputRef, id, classes: classesProp, ...props }: RadioProps): React.ReactElement {
    const createUserClickedRadioLogEvent = useCreateUserClickedRadioLogEvent();
    const radioGroupContext = useContext(RadioGroupContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        createUserClickedRadioLogEvent(label ?? '');
        onChange?.(e.target.checked, e);
        radioGroupContext.onChange?.(value);
    };

    const getChecked = () => {
        if (!radioGroupContext.value) return checked;
    };

    return (
        <div className={classNames(classes.container, classesProp?.container)}>
            <input
                {...props}
                checked={getChecked()}
                id={id ?? `${value}-radio`}
                type='radio'
                name={radioGroupContext.name}
                value={value}
                disabled={disabled}
                ref={inputRef}
                onChange={handleChange}
                className={classNames(classes.input, classesProp?.input)}
            />
            <div className={classes.labelContainer}>
                <Label classes={{ label: classesProp?.label }} htmlFor={id ?? `${value}-radio`}>
                    {label}
                </Label>
                {!!tooltip && <Tooltip text={tooltip} />}
            </div>
        </div>
    );
}