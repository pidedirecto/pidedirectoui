/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SelectableList } from 'src/components/SelectableList';

const meta: Meta<typeof SelectableList> = {
    component: SelectableList,
    args: {
        label: 'Select an option',
        value: [],
        options: [],
    },
    argTypes: {
        label: {
            description: 'SelectableList label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        options: {
            description: 'SelectableList options',
            type: {
                required: true,
                name: 'Array<{ value: any, content: React.Node }>' as any,
            },
            table: {
                type: { summary: 'large' },
            },
            control: false,
        },
        onChange: {
            description: 'SelectableList onChange function',
            table: {
                type: { summary: 'function' },
            },
            type: {
                required: true,
                name: 'function',
            },
            control: false,
        },
        value: {
            description: 'SelectableList value, if multiselectable this should be an array',
            table: {
                type: { summary: 'any' },
            },
            type: {
                required: true,
                name: 'any' as any,
            },
            control: false,
        },
        disabled: {
            description: 'Disables SelectableList component',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        error: {
            description: 'SelectableList error state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        helperText: {
            description: 'SelectableList helper text',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        multiselectable: {
            description: 'SelectableList multiselectable',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override SelectableList style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.listContainer': {
            description: 'CSS class to override the list container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.row': {
            description: 'CSS class to override the row style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.label': {
            description: 'CSS class to override the label style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof SelectableList>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [value, setValue] = useState<any>();

        return <SelectableList options={options} onChange={setValue} value={value} label={'Select an option'} />;
    },
};

export const Multiselectable: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [value, setValue] = useState<any>([]);

        return <SelectableList options={options} onChange={setValue} value={value} label={'Select an option'} multiselectable />;
    },
};

const options = [
    {
        value: 1,
        content: 'Option 1',
    },
    {
        value: 2,
        content: 'Option 2',
    },
    {
        value: 3,
        content: 'Option 3',
    },
    {
        value: 4,
        content: 'Option 4',
    },
    {
        value: 5,
        content: 'Option 5',
    },
    {
        value: 6,
        content: 'Option 6',
    },
];
