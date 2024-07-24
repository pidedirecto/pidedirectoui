/**
 * @prettier
 */
import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ImageUpload } from 'src/components/ImageUpload';
import { FormImageUploadProps } from 'src/types/form/FormImageUpload';
import { getError } from 'src/utils/form/getError';
import { getFormFieldLabel } from 'src/utils/form/getFormFieldLabel';

export function FormImageUpload({
    name,
    label,
    helperText,
    transformer,
    defaultValue,
    dimensions,
    onDimensionsError,
    disabled,
    tooltip,
    required,
    rules,
    children,
    classes,
}: FormImageUploadProps): React.ReactElement {
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
                <ImageUpload
                    name={name}
                    value={value}
                    onChange={onChange}
                    transformer={transformer}
                    label={getFormFieldLabel(required, label)}
                    tooltip={tooltip}
                    disabled={disabled}
                    dimensions={dimensions}
                    onDimensionsError={onDimensionsError}
                    error={!!error}
                    helperText={error?.message ?? helperText}
                    classes={classes}
                >
                    {children}
                </ImageUpload>
            )}
            defaultValue={defaultValue ?? null}
            rules={{
                required,
                ...rules,
            }}
        />
    );
}
