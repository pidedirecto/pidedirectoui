/**
 * @prettier
 */

import * as React from 'react';
import { Form } from 'src/form/Form';
import { FormAutocomplete } from 'src/form/FormAutocomplete';
import { useForm } from 'src/hooks/useForm';
import { useWatch } from 'src/hooks/useWatch';

export function App(): React.ReactElement {
    const form = useForm();
    const { control } = form;
    const pepe = useWatch({ name: 'example', control });

    const itemsFiltered = [
        { value: 'value1', label: 'Example 1' },
        { value: 'value2', label: 'Example 2' },
        { value: 'value3', label: 'Example 3' },
        { value: 'value4', label: 'Example 4' },
        { value: 'value5', label: 'Example 5' },
        { value: 'value6', label: 'Example 6' },
        { value: 'value7', label: 'Example 7' },
        { value: 'value8', label: 'Example 8' },
        { value: 'value9', label: 'Example 9' },
    ];

    console.log({ pepe });
    return (
        <div style={{ padding: 120 }}>
            <Form form={form} onSubmit={() => {}}>
                <FormAutocomplete
                    name={'example'}
                    data={itemsFiltered}
                    getOptionValue={(option: any) => option.value}
                    getOptionLabel={(option: any) => option.label}
                    renderOption={(option: any) => (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '8px 4px',
                                gap: '12px',
                            }}
                        >
                            <p>{option.label}</p>
                        </div>
                    )}
                />
            </Form>
        </div>
    );
}
