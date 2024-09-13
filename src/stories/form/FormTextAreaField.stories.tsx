import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormTextAreaField } from 'src/form/FormTextAreaField';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormTextAreaField> = {
    component: FormTextAreaField,
    args: {
        name: 'textarea',
        label: 'Leave a comment',
    },
    argTypes: {
        name: {
            description: 'TextArea name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            description: 'TextArea label',
            table: {
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'TextArea helper text',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'TextArea default value',
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
            description: 'TextArea tooltip',
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
            description: 'Props passed directly to the TextArea component',
            table: {
                type: { summary: 'object' },
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormTextAreaField>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormTextAreaField name={'input'} label={'Leave a comment'} />
            </Form>
        );
    },
};
