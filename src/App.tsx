/**
 * @prettier
 */

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox } from 'src/components/Checkbox';
import { Form } from 'src/form/Form';
import { FormCheckbox } from 'src/form/FormCheckbox';

export function App(): React.ReactElement {
    const form = useForm();
    return (
        <div>
            <h1>Checkbox</h1>
            <Checkbox name={'asdas1'} label={'asdasda'} helperText={'this is helper text'} />
            <hr />
            <Checkbox name={'asdas2'} label={'asdasda'} error helperText={'this is helper text'} />
            <hr />
            <Checkbox name={'asdas3'} label={'asdasda'} helperText={'this is helper text'} disabled />
            <hr />
            <Checkbox name={'asdas4'} label={'asdasda'} helperText={'this is helper text'} disabled checked />

            <Form form={form} onSubmit={console.log}>
                <FormCheckbox name={'test'} label={'Form label'} />
                <button type={'submit'}>submit</button>
            </Form>
        </div>
    );
}
