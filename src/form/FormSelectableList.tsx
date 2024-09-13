import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SelectableList } from 'src/components/SelectableList';
import { FormContext } from 'src/form/Form';
import { FormSelectableListProps } from 'src/types/form/FormSelectableList';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';

export function FormSelectableList({
    name,
    label,
    helperText,
    defaultValue,
    disabled,
    searchable,
    virtualized,
    height,
    variant,
    options,
    required,
    rules,
    multiselectable,
    classes,
}: FormSelectableListProps): React.ReactElement {
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
                    label={getFormFieldLabel(required, label)}
                    multiselectable={multiselectable}
                    searchable={searchable}
                    virtualized={virtualized}
                    height={height}
                    variant={variant}
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
