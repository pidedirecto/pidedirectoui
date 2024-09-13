import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormSelectableList } from 'src/form/FormSelectableList';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormSelectableList> = {
    component: FormSelectableList,
    args: {
        name: 'checkbox',
        label: 'Checkbox',
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
        disabled: {
            description: 'Disables SelectableList component',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        defaultValue: {
            description: 'SelectableList default value',
            table: {
                type: { summary: 'any' },
            },
        },
        required: {
            description: `Sets SelectableList as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
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
        variant: {
            description: 'SelectableList variant',
            table: {
                type: { summary: 'underline' },
            },
            control: false,
        },
        searchable: {
            description: 'Searchable list',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        virtualized: {
            description: 'Virtualize list',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        height: {
            description: 'Virtualized list height in pixels, required when list is virtualized',
            table: {
                type: { summary: 'number' },
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

type Story = StoryObj<typeof FormSelectableList>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormSelectableList name={'checkbox'} label={'Select options'} options={options} />
            </Form>
        );
    },
};

const options = [
    {
        value: 1,
        label: 'Option 1',
    },
    {
        value: 2,
        label: 'Option 2',
    },
    {
        value: 3,
        label: 'Option 3',
    },
    {
        value: 4,
        label: 'Option 4',
    },
    {
        value: 5,
        label: 'Option 5',
    },
    {
        value: 6,
        label: 'Option 6',
    },
];
