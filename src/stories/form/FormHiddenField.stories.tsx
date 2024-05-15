/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect } from 'react';
import { Form } from 'src/form/Form';
import { FormHiddenField } from 'src/form/FormHiddenField';
import { useForm } from 'src/hooks/useForm';

const meta: Meta<typeof FormHiddenField> = {
    component: FormHiddenField,
    args: {
        name: 'hiddenValue',
        defaultValue: 'value by default',
    },
    argTypes: {
        name: {
            description: 'Input name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'Input default value',
            table: {
                type: { summary: 'string' },
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormHiddenField>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        useEffect(() => {
            form.reset({ hiddenInput: 'new value' });
        }, []);

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormHiddenField name={'hiddenInput'} defaultValue={'hiddenValue'} />
            </Form>
        );
    },
};
