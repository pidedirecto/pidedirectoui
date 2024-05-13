/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormScheduleDaySelect } from 'src/form/FormScheduleDaySelect';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormScheduleDaySelect> = {
    component: FormScheduleDaySelect,
    args: {
        name: 'schedule',
        label: 'Select your schedule',
    },
    argTypes: {
        name: {
            description: 'ScheduleDaySelect name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            description: 'ScheduleDaySelect label',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'ScheduleDaySelect default value',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            description: 'Disables ScheduleDaySelect',
            table: {
                type: { summary: 'boolean' },
            },
        },
        daysTranslations: {
            description: 'ScheduleDaySelect time pickers label',
            table: {
                type: { summary: 'Object' },
            },
            control: false,
        },
        required: {
            description: `Sets checkbox as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
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

type Story = StoryObj<typeof FormScheduleDaySelect>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormScheduleDaySelect name={'schedule'} label={'Select your schedule'} />
            </Form>
        );
    },
};
