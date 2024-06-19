/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from 'src/components/TextArea';

const meta: Meta<typeof TextArea> = {
    component: TextArea,
    args: {
        name: 'input',
        label: 'Leave a comment',
    },
    argTypes: {
        name: {
            description: 'TextArea name',
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
            description: 'TextArea label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        disabled: {
            description: 'Disables input',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        required: {
            description: 'Require input',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        tooltip: {
            description: 'TextArea tooltip',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        helperText: {
            description: 'TextArea helper text',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        error: {
            description: 'TextArea error state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onChange: {
            description: 'TextArea on change callback',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        inputRef: {
            description: 'TextArea React.Ref',
            table: {
                type: { summary: 'React.Ref' },
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
            description: 'CSS class to override the container style, this container includes label, textarea and helper text',
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
            description: 'CSS class to override the textarea',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};
