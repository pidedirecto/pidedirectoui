import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'src/components/Input';
import { FormContext } from 'src/form/Form';
import classes from 'src/styles/form/formIntegerFieldProps.module.css';
import { FormIntegerFieldProps } from 'src/types/form/FormIntegerField';
import { classNames } from 'src/utils/css/classNames';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';
import { transformIntegerInput } from 'src/utils/form/transformIntegerInput';
import { transformIntegerOutput } from 'src/utils/form/transformIntegerOutput';

export function FormIntegerField({ name, label, helperText, defaultValue, disabled, tooltip, required, min, max, rules, inputProps }: FormIntegerFieldProps): React.ReactElement {
    const {
        errors,
        control,
        formState: { isSubmitting },
    } = useFormContext();
    const formContext = useContext(FormContext);

    const error = getError(errors, name);

    return (
        <Controller
            control={control}
            name={name}
            render={({ onChange, onBlur, value, name, ref }) => (
                <Input
                    {...inputProps}
                    inputRef={ref}
                    label={getFormFieldLabel(required, label)}
                    onBlur={onBlur}
                    value={transformIntegerInput(value)}
                    onChange={(value: string) => {
                        onChange(transformIntegerOutput(value));
                    }}
                    name={name}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    aria-label={label ? undefined : name}
                    tooltip={tooltip}
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    type='number'
                    inputMode='numeric'
                    classes={{ ...(inputProps?.classes ?? {}), input: classNames(classes.input, inputProps?.classes?.input) }}
                />
            )}
            defaultValue={defaultValue ?? null}
            rules={{
                required,
                min,
                max,
                ...rules,
            }}
        />
    );
}
