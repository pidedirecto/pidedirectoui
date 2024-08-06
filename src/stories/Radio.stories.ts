/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from 'src/components/Radio';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof Radio> = {
    component: Radio,
    args: {
        value: 'value',
        label: 'Just a checkbox',
    },
    argTypes: {
        value: {
            description: createLink('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value', 'HTML radio value'),
            table: {
                type: { summary: 'any' },
            },
            control: false,
        },
        label: {
            description: 'Label for the radio input',
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
        helperText: {
            description: 'Radio helper text',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        disabled: {
            description: 'Disables the radio',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        checked: {
            description: 'Controls the checked stated of the radio',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        inputRef: {
            description: 'React input ref',
            table: {
                type: { summary: 'React.Ref' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override radio style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.container': {
            description: 'CSS class to override the container radio style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.input': {
            description: 'CSS class to override the radio style',
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

type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};
