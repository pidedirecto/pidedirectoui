/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from 'src/components/Select';
import { CheckIcon } from 'src/icons/CheckIcon';
import { CrossIcon } from 'src/icons/CrossIcon';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof Select> = {
    component: Select,
    args: {
        options: [
            {
                value: '1',
                label: 'Option 1',
            },
            {
                value: '2',
                label: 'Option 2',
            },
            {
                value: '3',
                label: 'Option 3',
            },
        ],
        placeholder: 'Select a value',
    },
    argTypes: {
        options: {
            description: 'Array of options',
            type: {
                required: true,
                name: 'array' as any,
            },
            table: {
                type: { summary: 'array' },
            },
            control: false,
        },
        name: {
            description: 'Select name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        value: {
            description: 'Select value',
            type: {
                required: true,
                name: 'any | Array<any>' as any,
            },
            table: {
                type: { summary: 'any | Array<any>' },
            },
            control: false,
        },
        label: {
            description: 'Select label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        placeholder: {
            description: 'Select placeholder',
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
        tooltip: {
            description: 'Select tooltip, only if select has a label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        helperText: {
            description: 'Select helperText',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        searchable: {
            description: 'Enables search in select',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        position: {
            description: `Select dropdown position, ${createLink('https://ui.pidedirecto.mx/?path=/docs/stories-dropdown--dropdown#api', 'same as Dropdown')}`,
            table: {
                type: { summary: 'right | left' },
            },
            control: false,
        },
        onChange: {
            description: 'Callback to be called each time the user changes the select value',
            type: {
                required: true,
                name: 'function' as any,
            },
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override select style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.container': {
            description: 'CSS class to override the container style, this container contains the select, label and helper text',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.selectContainer': {
            description: 'CSS class to override the select container style, this is only the select container',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.dropdown': {
            description: 'CSS class to override the select dropdown container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
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

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const Multiselectable: Story = {
    args: {
        ...meta.args,
        multiselectable: true,
    },
};

export const Searchable: Story = {
    args: {
        ...meta.args,
        searchable: true,
    },
};

export const CustomOptions: Story = {
    args: {
        options: [
            {
                value: '1',
                label: 'Option 1',
                content: (
                    <div>
                        <CrossIcon />
                        This option is not valid!
                    </div>
                ),
            },
            {
                value: '2',
                label: 'Option 2',
                content: (
                    <div>
                        <CheckIcon />
                        This option is valid!
                    </div>
                ),
            },
            {
                value: '3',
                label: 'Option 3',
            },
        ],
    },
};
