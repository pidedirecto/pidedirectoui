/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from 'src/components/Checkbox';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    args: {
        name: 'checkbox',
        value: 'value',
        label: 'Just a checkbox',
    },
    argTypes: {
        name: {
            description: 'Name for the checkbox input',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        value: {
            description: createLink('https://developer.mozilla.org/es/docs/Web/HTML/Element/input/checkbox#value', 'HTML checkbox input'),
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        label: {
            description: 'Label for the checkbox input',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        helperText: {
            description: 'Helper text to be displayed below the checkbox',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        tooltip: {
            description: 'Renders a tooltip next to the label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        disabled: {
            description: 'Disables the checkbox',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        checked: {
            description: 'Controls the checked stated of the checkbox',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onChange: {
            description: 'Function to be called when the checked stated of the checkbox changes',
            type: {
                required: false,
                name: 'function',
            },
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override checkbox style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.container': {
            description: 'CSS class to override the container checkbox style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.containerError': {
            description: 'CSS class to override the container checkbox style when checkbox is in error state',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.checkbox': {
            description: 'CSS class to override the checkbox style',
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
            description: 'CSS class to override the label style when checkbox is in error state',
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
            description: 'CSS class to override the helper text style when checkbox is in error state',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
    args: {
        ...meta.args,
        onChange: undefined,
    },
};

export const Disabled: Story = {
    args: {
        ...meta.args,
        label: 'Checkbox disabled',
        onChange: undefined,
        disabled: true,
        name: 'checkbox-disabled',
    },
};

export const CheckedDisabled: Story = {
    args: {
        ...meta.args,
        label: 'Checkbox checked and disabled',
        onChange: undefined,
        checked: true,
        disabled: true,
        name: 'checkbox-checked-disabled',
    },
};

export const Error: Story = {
    args: {
        ...meta.args,
        label: 'Checkbox with error',
        onChange: undefined,
        error: true,
        name: 'checkbox-error',
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
