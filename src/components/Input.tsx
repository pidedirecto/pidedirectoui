/**
 * @prettier
 */
import * as React from 'react';
import { useState } from 'react';
import { HelperText } from 'src/components/HelperText';
import { Label } from 'src/components/Label';
import { Tooltip } from 'src/components/Tooltip';
import { SearchIcon } from 'src/icons/SearchIcon';
import { useCreateUserTypedInputLogEvent } from 'src/services/logEvent/useCreateUserTypedInputLogEvent';
import classes from 'src/styles/input.module.css';
import { InputProps } from 'src/types/components/Input';
import { classNames } from 'src/utils/css/classNames';

export function Input({
    onChange,
    type,
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
    leftAdornment,
    rightAdornment,
    InputComponent,
    onBlur,
    onFocus,
    id,
    classes: classesProp,
    ...props
}: InputProps): React.ReactElement {
    const [isFocused, setIsFocused] = useState(false);

    const createUserTypedInputLogEvent = useCreateUserTypedInputLogEvent();

    const isSearchType = type === 'search';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange?.(value, event);
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        createUserTypedInputLogEvent(label ?? name, value ?? '');
        onBlur?.(e);
        setIsFocused(false);
    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
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
            <div data-error={error} data-focus={isFocused} className={classNames(disabled ? classes.inputContainerDisabled : classes.inputContainer, classesProp?.inputContainer)}>
                {isSearchType && !leftAdornment && (
                    <div className={classes.icon}>
                        <SearchIcon size={16} />
                    </div>
                )}
                {!!leftAdornment && leftAdornment}
                {!!InputComponent && (
                    <InputComponent
                        {...props}
                        id={id ?? `${name}-input`}
                        type={type || 'text'}
                        className={classNames(classes.input, classesProp?.input)}
                        name={name}
                        onChange={handleChange}
                        aria-describedby={`${name ?? label}-tooltip`}
                        onBlur={handleInputBlur}
                        required={required}
                        autoComplete={autoComplete || 'off'}
                    />
                )}
                {!InputComponent && (
                    <input
                        {...props}
                        value={value}
                        ref={inputRef}
                        id={id ?? `${name}-input`}
                        type={type || 'text'}
                        className={classNames(classes.input, classesProp?.input)}
                        name={name}
                        required={required}
                        onChange={handleChange}
                        aria-describedby={`${name ?? label}-tooltip`}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        autoComplete={autoComplete || 'off'}
                        disabled={disabled}
                    />
                )}
                {!!rightAdornment && rightAdornment}
            </div>
            {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
        </div>
    );
}
