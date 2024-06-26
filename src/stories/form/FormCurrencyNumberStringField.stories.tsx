/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CountryCodes } from 'src/constants/CountryCode';
import { Form } from 'src/form/Form';
import { FormCurrencyNumberStringField } from 'src/form/FormCurrencyNumberStringField';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormCurrencyNumberStringField> = {
    component: FormCurrencyNumberStringField,
    args: {
        name: 'price',
        label: 'Product price',
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
        min: {
            description: `Sets input as required, can be a number or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
            table: {
                type: { summary: 'number | object' },
            },
        },
        max: {
            description: `Sets input as required, can be a number or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
            table: {
                type: { summary: 'number | object' },
            },
        },
        tooltip: {
            description: 'Input tooltip',
            table: {
                type: { summary: 'string' },
            },
        },
        country: {
            description: 'Country to display number format, this is useful to show correctly numbers accross different countries',
            table: {
                type: { summary: 'Country' },
            },
        },
        maximumDigits: {
            description: 'maximum digits, by default 2',
            table: {
                type: { summary: 'number' },
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

type Story = StoryObj<typeof FormCurrencyNumberStringField>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormCurrencyNumberStringField name={'price'} label={'Product price'} />
            </Form>
        );
    },
};

export const UruguayInput: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormCurrencyNumberStringField name={'price'} label={'Product price'} country={CountryCodes.UY} />
            </Form>
        );
    },
};
