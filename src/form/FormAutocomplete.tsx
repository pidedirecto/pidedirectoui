/**
 * @prettier
 */
import { useContext } from 'react';
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete } from 'src/components/Autocomplete';
import { FormContext } from 'src/form/Form';
import { FormAutocompleteProps } from 'src/types/form/FormAutocomplete';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';

export function FormAutocomplete({
    label,
    name,
    placeholder,
    helperText,
    data,
    renderOption,
    getOptionDisabled,
    getOptionLabel,
    getOptionValue,
    onInputChange,
    disabled,
    classes: classesProp,
    defaultValue,
    required,
    rules,
}: FormAutocompleteProps): React.ReactElement {
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
            render={({ onChange, name }) => (
                <Autocomplete
                    name={name}
                    label={getFormFieldLabel(required, label)}
                    placeholder={placeholder}
                    helperText={helperText}
                    data={data}
                    getOptionValue={getOptionValue}
                    getOptionLabel={getOptionLabel}
                    getOptionDisabled={getOptionDisabled}
                    renderOption={renderOption}
                    onChange={(itemIds: any) => onChange(itemIds)}
                    onInputChange={onInputChange}
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
