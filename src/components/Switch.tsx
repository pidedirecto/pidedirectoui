import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { Tooltip } from 'src/components/Tooltip';
import { useCreateUserClickedSwitchLogEvent } from 'src/services/logEvent/useCreateUserClickedSwitchLogEvent';
import classes from 'src/styles/switch.module.css';
import { SwitchProps } from 'src/types/components/Switch';
import { classNames } from 'src/utils/css/classNames';

export function Switch({ disabled, inputRef, value, id, error, onChange, tooltip, name, label, helperText, labelPosition = 'right', classes: classesProp, ...props }: SwitchProps): React.ReactElement {
    const createUserClickedSwitchLogEvent = useCreateUserClickedSwitchLogEvent();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        createUserClickedSwitchLogEvent(label || name || '');
        onChange?.(e);
    };

    return (
        <div className={classNames(classes.container, classesProp?.container, error && classesProp?.containerError)}>
            <div className={classes.switchContainer}>
                {labelPosition === 'left' && (
                    <>
                        {!!label && (
                            <Label aria-disabled={!!disabled} htmlFor={id ?? `${name ?? ''}-toggle`} error={error} classes={{ label: classesProp?.label, error: classesProp?.labelError }}>
                                {label}
                            </Label>
                        )}
                        {!!tooltip && <Tooltip text={tooltip} />}
                    </>
                )}
                <input
                    {...props}
                    aria-describedby={`${name}-helperText`}
                    type='checkbox'
                    name={name}
                    value={value}
                    id={`${name}-toggle`}
                    className={classNames(classes.input, classesProp?.switch)}
                    disabled={disabled}
                    ref={inputRef}
                    onChange={handleChange}
                />
                {labelPosition === 'right' && (
                    <>
                        {!!label && (
                            <Label aria-disabled={!!disabled} htmlFor={id ?? `${name ?? ''}-toggle`} error={error} classes={{ label: classesProp?.label, error: classesProp?.labelError }}>
                                {label}
                            </Label>
                        )}
                        {!!tooltip && <Tooltip text={tooltip} />}
                    </>
                )}
            </div>
            {helperText && (
                <HelperText id={`${name}-helperText`} classes={{ helperText: classesProp?.helperText, error: classesProp?.helperTextError }} error={error}>
                    {helperText}
                </HelperText>
            )}
        </div>
    );
}
