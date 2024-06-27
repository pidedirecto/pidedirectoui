/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from 'src/components/Radio';
import { RadioGroup } from 'src/components/RadioGroup';

const meta: Meta<typeof RadioGroup> = {
    component: RadioGroup,
    args: {
        label: 'Select your favorite food',
        name: 'food',
    },
    argTypes: {
        name: {
            description: 'Radio group name',
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
            description: 'Radio group value',
            table: {
                type: { summary: 'any' },
            },
            control: false,
        },
        label: {
            description: 'Label for the radio group',
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
            description: 'Radio group helper text',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        error: {
            description: 'Sets radio group error state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        orientation: {
            description: 'Defines the radios orientations.',
            table: {
                type: { summary: 'horizontal | vertical' },
            },
            control: false,
        },
        onChange: {
            description: 'Function to be called when the checked stated of the radio group changes',
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
            description: 'Classes object to override radio style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.container': {
            description: 'CSS class to override the container radio group style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
    args: {
        ...meta.args,
        onChange: undefined,
    },
    render: () => (
        <RadioGroup label={'Select your favorite food'} value={undefined} name={'food'} onChange={() => {}}>
            <Radio value='pizza' label={'Pizza'} />
            <Radio value='burger' label={'Burger'} />
            <Radio value='taco' label={'Taco'} />
        </RadioGroup>
    ),
};
