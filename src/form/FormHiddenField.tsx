/**
 * @prettier
 */
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormHiddenFieldProps } from 'src/types/form/FormHiddenField';

export function FormHiddenField({ name, defaultValue }: FormHiddenFieldProps): React.ReactElement {
    const { register } = useFormContext();
    return <input type='hidden' ref={register()} name={name} defaultValue={defaultValue} />;
}
