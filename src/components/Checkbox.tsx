/**
 * @prettier
 */
import { HTMLProps } from 'react';
import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { Tooltip } from 'src/components/Tooltip';
import { CheckIcon } from 'src/icons/CheckIcon';
import classes from 'src/styles/checkbox.module.css';
import { classNames } from 'src/utils/css/classNames';

export function Checkbox({ helperText, classes: classesProp, tooltip, name, id, label, onChange, ...props }: Props): React.ReactElement {
    const handleLabelClick = (e: React.MouseEvent<HTMLLabelElement>) => e.preventDefault();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    return (
        <div className={classNames(classes.container, classesProp?.container)}>
            <div className={classes.hidden}>
                <CheckIcon />
            </div>

            <div className={classes.inputContainer}>
                <input
                    {...props}
                    type='checkbox'
                    onChange={(e) => handleChange(e)}
                    id={id ?? `${name ?? ''}-checkbox`}
                    aria-describedby={!!helperText ? `${name}-helperText` : undefined}
                    className={classes.input}
                />

                {label && (
                    <Label htmlFor={`${name ?? ''}-checkbox`} className={classesProp?.label} onClick={handleLabelClick}>
                        {label}
                    </Label>
                )}
                {tooltip && <Tooltip text={tooltip} />}
            </div>
            {helperText && <HelperText id={`${name}-helperText`}>{helperText}</HelperText>}
        </div>
    );
}

type Props = Omit<HTMLProps<HTMLInputElement>, 'className' | 'type'> & {
    helperText?: string;
    classes?: {
        container?: string;
        label?: string;
    };
    tooltip?: string;
    label?: string;
};
