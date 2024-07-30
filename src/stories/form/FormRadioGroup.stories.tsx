/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from 'src/components/Radio';
import { Form } from 'src/form/Form';
import { FormRadioGroup } from 'src/form/FormRadioGroup';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormRadioGroup> = {
    component: FormRadioGroup,
    args: {
        name: 'food',
        label: 'Select your favorite food',
    },
    argTypes: {
        name: {
            description: 'RadioGroup name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            description: 'RadioGroup label',
            table: {
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'RadioGroup helper text',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'RadioGroup default value',
            table: {
                type: { summary: 'boolean' },
            },
        },
        required: {
            description: `Sets radio group as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
            table: {
                type: { summary: 'boolean | object' },
            },
        },
        tooltip: {
            description: 'RadioGroup tooltip',
            table: {
                type: { summary: 'string' },
            },
        },
        orientation: {
            description: 'Defines the radios orientations.',
            table: {
                type: { summary: 'horizontal | vertical' },
            },
            control: false,
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

type Story = StoryObj<typeof FormRadioGroup>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormRadioGroup name={'food'} label={'Select your favorite food'}>
                    <Radio value='pizza' label={'Pizza'} />
                    <Radio value='burger' label={'Burger'} />
                    <Radio value='taco' label={'Taco'} />
                </FormRadioGroup>
            </Form>
        );
    },
};
