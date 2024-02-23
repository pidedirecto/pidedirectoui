/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from 'src/components/Switch';

const meta: Meta<typeof Switch> = {
    component: Switch,
    args: {
        name: 'switch',
        value: 'value',
        label: 'Are you a cheese lover?',
    },
    argTypes: {
        name: {
            description: 'Name for the switch input',
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
            description: 'Value for the switch input',
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
            description: 'Label for the switch input',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        helperText: {
            description: 'Helper text to be displayed below the switch',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        disabled: {
            description: 'Disables the switch',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onChange: {
            description: 'Function to be called when the checked stated of the switch changes',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override switch style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.container': {
            description: 'CSS class to override the container switch style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.containerError': {
            description: 'CSS class to override the container switch style when switch is in error state',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.switch': {
            description: 'CSS class to override the switch style',
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
        'classes.labelError': {
            description: 'CSS class to override the label style when switch is in error state',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.helperText': {
            description: 'CSS class to override the helper text style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.helperTextError': {
            description: 'CSS class to override the helper text style when switch is in error state',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
    args: {
        ...meta.args,
        onChange: undefined,
    },
};

export const Disabled: Story = {
    args: {
        ...meta.args,
        label: 'Switch disabled',
        onChange: undefined,
        disabled: true,
        name: 'switch-disabled',
    },
};

export const CheckedDisabled: Story = {
    args: {
        ...meta.args,
        label: 'Switch checked and disabled',
        onChange: undefined,
        checked: true,
        disabled: true,
        name: 'switch-checked-disabled',
    },
};

export const Error: Story = {
    args: {
        ...meta.args,
        label: 'Switch with error',
        onChange: undefined,
        error: true,
        name: 'switch-error',
    },
};

export const Info: Story = {
    args: {
        ...meta.args,
        onChange: undefined,
        helperText: 'This is just a helper text',
        tooltip: 'This is just a tooltip',
    },
};
