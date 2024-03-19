/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'src/components/Input';

const meta: Meta<typeof Input> = {
    component: Input,
    args: {
        name: 'input',
        label: 'Write your favorite food',
    },
    argTypes: {
        name: {
            description: 'Controls opening the accordion',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        label: {
            description: 'Input label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        tooltip: {
            description: 'Input tooltip',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        helperText: {
            description: 'Input helper text',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        error: {
            description: 'Input error state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onChange: {
            description: 'Input on change callback',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        inputRef: {
            description: 'Input React.Ref',
            table: {
                type: { summary: 'React.Ref' },
            },
            control: false,
        },
        leftAdornment: {
            description: "Content to be rendered to the input's left",
            table: {
                type: { summary: 'React.Node' },
            },
            control: false,
        },
        rightAdornment: {
            description: "Content to be rendered to the input's right",
            table: {
                type: { summary: 'React.Node' },
            },
            control: false,
        },
        InputComponent: {
            description: 'New input component to override the default one',
            table: {
                type: { summary: 'React.FunctionComponent' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override input style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.container': {
            description: 'CSS class to override the container style, this container includes label, input and helper text',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.inputContainer': {
            description: 'CSS class to override the input container style, this container includes only the actual input and icons',
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
        'classes.input': {
            description: 'CSS class to override the input',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const Search: Story = {
    args: {
        ...meta.args,
        type: 'search',
    },
};
