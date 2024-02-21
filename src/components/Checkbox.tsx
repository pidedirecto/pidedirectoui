/**
 * @prettier
 */
import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { Tooltip } from 'src/components/Tooltip';
import { useCreateUserClickedCheckboxLogEvent } from 'src/services/logEvent/useCreateUserClickedCheckboxLogEvent';
import classes from 'src/styles/checkbox.module.css';
import { CheckboxProps } from 'src/types/components/Checkbox';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';
import { classNames } from 'src/utils/css/classNames';

export function Checkbox({ helperText, classes: classesProp, tooltip, name, id, label, error, onChange, disabled, ...props }: CheckboxProps): React.ReactElement {
    const createUserClickedCheckBoxLogEvent = useCreateUserClickedCheckboxLogEvent();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        createUserClickedCheckBoxLogEvent(label ?? '');
        onChange?.(e);
    };

    return (
        <div className={classNames(classes.container, classesProp?.container, error && classNames(classes.containerError, classesProp?.containerError))}>
            <div className={classes.hidden}>
                <CheckIcon />
            </div>
            <div className={classes.inputContainer}>
                <input
                    {...props}
                    name={name}
                    disabled={disabled}
                    type='checkbox'
                    onChange={(e) => handleChange(e)}
                    id={id ?? `${name ?? ''}-checkbox`}
                    aria-describedby={!!helperText ? `${name}-helperText` : undefined}
                    className={classes.input}
                />
                {!!label && (
                    <Label aria-disabled={!!disabled} htmlFor={id ?? `${name ?? ''}-checkbox`} error={error} classes={{ label: classesProp?.label, error: classesProp?.labelError }}>
                        {label}
                    </Label>
                )}
                {!!tooltip && <Tooltip text={tooltip} />}
            </div>
            {!!helperText && (
                <HelperText id={`${name}-helperText`} classes={{ helperText: classesProp?.helperText, error: classesProp?.helperTextError }} error={error}>
                    {helperText}
                </HelperText>
            )}
        </div>
    );
}

function CheckIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 9} height={height ?? size ?? 9} viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <clipPath id='check-icon-clip-path'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.46702 0.72696C8.75592 0.91586 8.83702 1.3032 8.64812 1.5921L4.39811 8.09212C4.29795 8.24532 4.13568 8.34682 3.95414 8.37002C3.77259 8.39322 3.59001 8.33562 3.45458 8.21252L0.704582 5.71253C0.449172 5.48034 0.430352 5.08506 0.662542 4.82965C0.894732 4.57424 1.29001 4.55541 1.54542 4.78761L3.75304 6.79453L7.60192 0.908039C7.79082 0.619139 8.17812 0.53807 8.46702 0.72696Z'
                    fill={color ?? 'currentColor'}
                />
            </clipPath>
        </svg>
    );
}
