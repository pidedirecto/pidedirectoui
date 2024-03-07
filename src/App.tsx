/**
 * @prettier
 */

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from 'src/components/Switch';
import { Form } from 'src/form/Form';
import { FormSwitch } from 'src/form/FormSwitch';

export function App(): React.ReactElement {
    const form = useForm();
    return (
        <div>
            <Switch name={'asdas1'} label={'asdas'} />
            <hr />
            <Switch name={'asdas2'} label={'asdas'} checked={true} value={true} />
            <hr />
            <Switch name={'asdas3'} label={'asdas'} disabled />
            <hr />
            <Switch name={'asdas4'} label={'asdas'} checked={true} disabled />
            <hr />
            <Switch name={'asdas5'} label={'asdas'} error />
            <hr />
            <Form form={form} onSubmit={console.log}>
                <FormSwitch name={'asda'} label={'form switch'} />
                <button type={'submit'}>submit</button>
            </Form>
        </div>
    );
}
