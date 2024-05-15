/**
 * @prettier
 */

import * as React from 'react';
import { useEffect } from 'react';
import { FormTextField } from 'src/form/FormTextField';
import { useFieldArray } from 'src/hooks/useFieldArray';
import { useFormContext } from 'src/hooks/useFormContext';

export function AppForm(): React.ReactElement {
    const { control } = useFormContext();
    const { append, fields, remove } = useFieldArray({ control, name: 'arrayInfo' });

    useEffect(() => {
        append({ userName: undefined });
        append({ userName: undefined });
        append({ userName: undefined });
        append({ userName: undefined });
        append({ userName: undefined });
    }, []);

    return (
        <>
            {fields.map((field, idx) => {
                return <FormTextField name={`arrayInfo.${idx}.userName`} label={'Name of front end dev'}></FormTextField>;
            })}
        </>
    );
}
