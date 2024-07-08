/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormPasswordField } from 'src/form/FormPasswordField';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormPasswordField> = {
    component: FormPasswordField,
    args: {
        name: 'checkbox',
        label: 'Checkbox',
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
        label: {
            description: 'Input label',
            table: {
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'Input helper text',
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
        placeholder: {
            description: 'Input placeholder value',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            description: 'Disables input',
            table: {
                type: { summary: 'boolean' },
            },
        },
        required: {
            description: `Sets input as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
            table: {
                type: { summary: 'boolean | object' },
            },
        },
        tooltip: {
            description: 'Input tooltip',
            table: {
                type: { summary: 'string' },
            },
        },
        rules: {
            description: createLink('https://react-hook-form.com/docs/useform/register#options', 'Rules object'),
            table: {
                type: { summary: 'object' },
            },
        },
        inputProps: {
            description: 'Props passed directly to the Input component',
            table: {
                type: { summary: 'object' },
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormPasswordField>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormPasswordField name={'password'} label={'Password'} placeholder={'PlaceHolder text'} />
            </Form>
        );
    },
};
