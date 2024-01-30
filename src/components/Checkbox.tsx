/**
 * @prettier
 */
import { useMemo } from 'react';
import * as React from 'react';
import { Tooltip } from 'src/components/Tooltip';
import { CheckIcon } from 'src/icons/CheckIcon';
import classes from 'src/styles/checkbox.module.css';
import { classNames } from 'src/utils/css/classNames';

export function Checkbox({ name, value, label, helperText, disabled, checked = false, onChange, classes: classesProp, tooltip }: Props): React.ReactElement {
    const handleLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => e.preventDefault();

    const handleChange = (value: string | undefined, e: React.ChangeEvent<HTMLInputElement>) => {
        // createUserClickedCheckBoxLogEvent({ pageContext, label });
        onChange?.(value, e);
    };

    return useMemo(
        () => (
            <div className={classNames(classes.container, classesProp?.container)}>
                <div className={classes.hidden}>
                    <CheckIcon />
                </div>

                <div className={classes.inputContainer}>
                    <input
                        aria-label={label ? '' : name}
                        type='checkbox'
                        name={name}
                        value={value}
                        onChange={(e) => handleChange(value, e)}
                        id={`${name ?? ''}-checkbox`}
                        className={classes.input}
                        disabled={disabled}
                        checked={checked}
                    />

                    {label && (
                        <label htmlFor={`${value ?? ''}-checkbox`} className={classNames(classes.label, classesProp?.label)} onClick={handleLabelClick}>
                            {label}
                        </label>
                    )}
                    {tooltip && <Tooltip text={tooltip} />}
                </div>
                {helperText && (
                    <div className={classes.helperTextContainer}>
                        <span className={classes.span}>{helperText}</span>
                    </div>
                )}
            </div>
        ),
        [name, value, label, disabled, checked],
    );
}

type Props = {
    name: string;
    value?: string;
    label: string;
    helperText?: string;
    disabled?: boolean;
    checked: boolean;
    onChange?: Function;
    classes?: {
        container?: string;
        label?: string;
    };
    tooltip?: string;
};
