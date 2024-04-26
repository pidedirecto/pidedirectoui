/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MultiselectableAutocomplete } from 'src/components/MultiselectableAutocomplete';
import { FormContext } from 'src/form/Form';
import { FormMultiselectableAutoCompleteProps } from 'src/types/form/FormMultiselectableAutoComplete';
import { getError } from 'src/utils/form/getError';

export function FormMultiselectableAutoComplete({
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
}: FormMultiselectableAutoCompleteProps): React.ReactElement {
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
                <MultiselectableAutocomplete
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
