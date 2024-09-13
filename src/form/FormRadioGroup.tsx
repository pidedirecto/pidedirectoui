import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { RadioGroup } from 'src/components/RadioGroup';
import { FormRadioGroupProps } from 'src/types/form/FormRadioGroup';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';

export function FormRadioGroup({ name, label, defaultValue, tooltip, helperText, required, rules, orientation, children }: FormRadioGroupProps): React.ReactElement {
    const {
        errors,
        control,
        formState: { isSubmitting },
    } = useFormContext();

    const error = getError(errors, name);

    return (
        <Controller
            control={control}
            name={name}
            render={({ onChange, value, name }) => (
                <RadioGroup
                    label={getFormFieldLabel(required, label)}
                    onChange={(value: any) => {
                        onChange(value);
                    }}
                    name={name}
                    value={value}
                    tooltip={tooltip}
                    helperText={error?.message ?? helperText}
                    error={!!error}
                    orientation={orientation}
                >
                    {children}
                </RadioGroup>
            )}
            defaultValue={defaultValue ?? null}
            rules={{
                required,
                ...rules,
            }}
        />
    );
}
