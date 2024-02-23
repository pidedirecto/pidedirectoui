/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormSwitch } from 'src/form/FormSwitch';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormSwitch> = {
    component: FormSwitch,
    args: {
        name: 'switch',
        label: 'Switch',
    },
    argTypes: {
        name: {
            description: 'Switch name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            description: 'Switch label',
            table: {
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'Switch helper text',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'Switch default value',
            table: {
                type: { summary: 'boolean' },
            },
        },
        disabled: {
            description: 'Disables switch',
            table: {
                type: { summary: 'boolean' },
            },
        },
        required: {
            description: `Sets switch as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
            table: {
                type: { summary: 'boolean | object' },
            },
        },
        tooltip: {
            description: 'Switch tooltip',
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
            description: 'Props passed directly to the Switch component',
            table: {
                type: { summary: 'object' },
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormSwitch>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormSwitch name={'switch'} label={'Form switch'} />
            </Form>
        );
    },
};
