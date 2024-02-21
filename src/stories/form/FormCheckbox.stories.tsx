/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormCheckbox } from 'src/form/FormCheckbox';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormCheckbox> = {
    component: FormCheckbox,
    args: {
        name: 'checkbox',
        label: 'Checkbox',
    },
    argTypes: {
        name: {
            description: 'Checkbox name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            description: 'Checkbox label',
            table: {
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'Checkbox helper text',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'Checkbox default value',
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
            description: `Sets checkbox as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
            table: {
                type: { summary: 'boolean | object' },
            },
        },
        tooltip: {
            description: 'Checkbox tooltip',
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
            description: 'Props passed directly to the Checkbox component',
            table: {
                type: { summary: 'object' },
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormCheckbox>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormCheckbox name={'checkbox'} label={'Form checkbox'} />
            </Form>
        );
    },
};
