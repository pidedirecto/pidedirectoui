/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Multiselectableautocomplete } from 'src/components/Multiselectableautocomplete';
import { FormContext } from 'src/form/Form';
import { FormMultiselectableAutocompleteProps } from 'src/types/form/FormMultiselectableAutocomplete';
import { getError } from 'src/utils/form/getError';

export function FormMultiselectableAutocomplete({
    label,
    name,
    placeholder,
    helperText,
    data,
    renderOption,
    getOptionDisabled,
    getOptionLabel,
    getOptionValue,
    disabled,
    selectAllOption,
    classes: classesProp,
    productsSelectedLabel,
    selectAllOptionLabel,
    defaultValue,
    required,
    rules,
}: FormMultiselectableAutocompleteProps): React.ReactElement {
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
            render={({ onChange, value, name }) => (
                <Multiselectableautocomplete
                    name={name}
                    label={required ? `${label}*` : label}
                    placeholder={placeholder}
                    helperText={helperText}
                    selectAllOption={selectAllOption}
                    selectAllOptionLabel={selectAllOptionLabel}
                    productsSelectedLabel={productsSelectedLabel}
                    data={data}
                    getOptionValue={getOptionValue}
                    getOptionLabel={getOptionLabel}
                    getOptionDisabled={getOptionDisabled}
                    renderOption={renderOption}
                    onChange={(itemIds: any) => onChange(itemIds)}
                    value={value}
                    disabled={isSubmitting || disabled || formContext.disabled}
                    classes={classesProp}
                    error={error}
                />
            )}
            defaultValue={defaultValue ?? []}
            rules={{
                required,
                ...rules,
            }}
        />
    );
}
