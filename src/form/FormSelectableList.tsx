/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SelectableList } from 'src/components/SelectableList';
import { FormContext } from 'src/form/Form';
import { FormSelectableListProps } from 'src/types/form/FormSelectableList';
import { getError } from 'src/utils/form/getError';

export function FormSelectableList({ name, label, helperText, defaultValue, disabled, options, required, rules, multiselectable, classes }: FormSelectableListProps): React.ReactElement {
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
            render={({ onChange, onBlur, value, name }) => (
                <SelectableList
                    label={required ? `${label}*` : label}
                    multiselectable={multiselectable}
                    options={options}
                    onChange={(selectedItems: any) => {
                        onChange(selectedItems);
                    }}
                    value={value}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    classes={classes}
                />
            )}
            defaultValue={defaultValue ?? null}
            rules={{
                required,
                ...rules,
            }}
        />
    );
}