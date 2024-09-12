import * as React from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { Tooltip } from 'src/components/Tooltip';
import { useCreateUserTypedInputLogEvent } from 'src/services/logEvent/useCreateUserTypedInputLogEvent';
import classes from 'src/styles/textArea.module.css';
import { TextAreaProps } from 'src/types/components/TextArea';
import { classNames } from 'src/utils/css/classNames';

export function TextArea({
    onChange,
    label,
    name,
    tooltip,
    helperText,
    value,
    required,
    disabled,
    step,
    error,
    autoComplete,
    inputRef,
    onBlur,
    id,
    classes: classesProp,
    ...props
}: TextAreaProps): React.ReactElement {
    const createUserTypedInputLogEvent = useCreateUserTypedInputLogEvent();

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        onChange?.(value, event);
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        createUserTypedInputLogEvent(label ?? name, value ?? '');
        onBlur?.(e);
    };

    return (
        <div className={classNames(classes.inputWrapper, classesProp?.container)}>
            {!!label && (
                <div className={classes.labelContainer}>
                    <Label htmlFor={id ?? `${name}-input`} error={error} classes={{ label: classesProp?.label }}>
                        {label}
                    </Label>
                    {!!tooltip && <Tooltip text={tooltip} id={`${name}-tooltip`} />}
                </div>
            )}
            <textarea
                {...props}
                value={value}
                ref={inputRef}
                id={id ?? `${name}-input`}
                className={classNames(classes.input, classesProp?.input)}
                name={name}
                required={required}
                onChange={handleChange}
                aria-describedby={`${name ?? label}-tooltip`}
                onBlur={handleInputBlur}
                autoComplete={autoComplete || 'off'}
                disabled={disabled}
                data-error={error}
            />
            {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
        </div>
    );
}
