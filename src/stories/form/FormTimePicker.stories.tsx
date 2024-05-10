/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormTimePicker } from 'src/form/FormTimePicker';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormTimePicker> = {
    component: FormTimePicker,
    args: {
        name: 'date',
        label: 'Select your schedule',
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
            description: 'Disables input',
            table: {
                type: { summary: 'boolean' },
            },
        },
        hoursAsValue: {
            description: 'If true the value of the input will be the hours string, else will be the date object',
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

type Story = StoryObj<typeof FormTimePicker>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormTimePicker name={'date'} label={'Select your schedule'} />
            </Form>
        );
    },
};
