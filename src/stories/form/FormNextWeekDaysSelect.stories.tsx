import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormNextWeekDaysSelect } from 'src/form/FormNextWeekDaysSelect';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormNextWeekDaysSelect> = {
    component: FormNextWeekDaysSelect,
    args: {
        placeholder: '',
    },
    argTypes: {
        name: {
            description: 'FormNextWeekDaysSelect name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        label: {
            description: 'FormNextWeekDaysSelect label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        placeholder: {
            description: 'FormNextWeekDaysSelect placeholder',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        multiselectable: {
            description: 'Makes select to be multiselectable',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        disabled: {
            description: 'Disables select',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        preventClose: {
            description: 'Prevents select options to be closed after clicking them',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        error: {
            description: 'Sets error state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        defaultValue: {
            description: 'FormNextWeekDaysSelect default value',
            table: {
                type: { summary: 'any | Array<any>' },
            },
            control: false,
        },
        tooltip: {
            description: 'FormNextWeekDaysSelect tooltip, only if select has a label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        helperText: {
            description: 'FormNextWeekDaysSelect helperText',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        required: {
            description: `Sets select as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
            table: {
                type: { summary: 'boolean | object' },
            },
        },
        classes: {
            description: 'Classes object to override select style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.button': {
            description: 'CSS class to override the select button style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.item': {
            description: 'CSS class to override the option container',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormNextWeekDaysSelect>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormNextWeekDaysSelect label={'Select day'} name={'days'} />
            </Form>
        );
    },
};
