/**
 * @prettier
 */

import * as React from 'react';
import { AppForm } from 'src/AppForm';
import { Button } from 'src/components/Button';
import { Form } from 'src/form/Form';
import { useForm } from 'src/hooks/useForm';

export function App(): React.ReactElement {
    const form = useForm();

    return (
        <Form
            form={form}
            onSubmit={(form) => {
                console.log({ form });
            }}
        >
            <AppForm />
            <Button type={'submit'}>{'Send info'}</Button>
        </Form>
    );
}
