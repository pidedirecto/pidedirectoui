/**
 * @prettier
 */
import { useContext, useState } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Button } from 'src/components/Button';
import { Input } from 'src/components/Input';
import { FormContext } from 'src/form/Form';
import { ClosedEyeIcon } from 'src/icons/ClosedEyeIcon';
import { EyeIcon } from 'src/icons/EyeIcon';
import classes from 'src/styles/form/formPasswordField.module.css';
import { FormPasswordFieldProps } from 'src/types/form/FormPasswordField';
import { getError } from 'src/utils/form/getError';

export function FormPasswordField({ name, label, helperText, defaultValue, disabled, tooltip, required, rules, inputProps }: FormPasswordFieldProps): React.ReactElement {
    const {
        errors,
        control,
        formState: { isSubmitting },
    } = useFormContext();
    const formContext = useContext(FormContext);

    const [showPassword, setShowPassword] = useState(false);

    const error = getError(errors, name);

    const togglePassword = () => setShowPassword(!showPassword);

    return (
        <Controller
            control={control}
            name={name}
            render={({ onChange, onBlur, value, name, ref }) => (
                <Input
                    {...inputProps}
                    type={showPassword ? 'text' : 'password'}
                    inputRef={ref}
                    label={required ? `${label ?? ''}*` : label}
                    onBlur={onBlur}
                    value={value ?? ''}
                    onChange={(value: string) => {
                        onChange(value);
                    }}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    aria-label={label ? undefined : name}
                    tooltip={tooltip}
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    rightAdornment={
                        <Button variant='icon' onClick={togglePassword} classes={{ button: classes.button }}>
                            {!!showPassword && <EyeIcon />}
                            {!showPassword && <ClosedEyeIcon />}
                        </Button>
                    }
                />
            )}
            defaultValue={defaultValue ?? null}
            rules={{
                ...rules,
                required: required,
            }}
        />
    );
}
