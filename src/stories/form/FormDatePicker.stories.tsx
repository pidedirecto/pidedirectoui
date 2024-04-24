/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormDatePicker } from 'src/form/FormDatePicker';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormDatePicker> = {
    component: FormDatePicker,
    args: {
        name: 'date',
        label: 'Select your birthday',
    },
    argTypes: {
        name: {
            description: 'DatePicker name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            description: 'DatePicker label',
            table: {
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'DatePicker helper text',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'DatePicker default value',
            table: {
                type: { summary: 'boolean' },
            },
        },
        disabled: {
            description: 'Disables checkbox',
            table: {
                type: { summary: 'boolean' },
            },
        },
        required: {
            description: `Sets date picker as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
            table: {
                type: { summary: 'boolean | object' },
            },
        },
        rules: {
            description: createLink('https://react-hook-form.com/docs/useform/register#options', 'Rules object'),
            table: {
                type: { summary: 'object' },
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormDatePicker>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormDatePicker name={'date'} label={'Select your birthday'} />
            </Form>
        );
    },
};
