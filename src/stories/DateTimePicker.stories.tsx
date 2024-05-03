/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import { DateTimePicker } from 'src/components/DateTimePicker';

const meta: Meta<typeof DateTimePicker> = {
    component: DateTimePicker,
    args: {
        name: 'date',
        label: 'Select your birthday',
        value: new Date(),
    },
    argTypes: {
        name: {
            description: 'DateTimePicker name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        value: {
            description: 'DateTimePicker value',
            type: {
                required: true,
                name: 'date' as any,
            },
            table: {
                type: { summary: 'date' as any },
            },
            control: false,
        },
        label: {
            description: 'DateTimePicker label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        inputRef: {
            description: 'DateTimePicker React.Ref',
            table: {
                type: { summary: 'React.Ref' },
            },
            control: false,
        },
        helperText: {
            description: 'DateTimePicker helper text',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        placeholder: {
            description: 'DateTimePicker placeholder',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        id: {
            description: 'DateTimePicker id',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        disabled: {
            description: 'Disables DateTimePicker',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        error: {
            description: 'DateTimePicker error state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onChange: {
            description: 'DateTimePicker on change callback',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override DateTimePicker style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.inputContainer': {
            description: 'CSS class to override the DateTimePicker input container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.input': {
            description: 'CSS class to override the DateTimePicker input',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof DateTimePicker>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};
