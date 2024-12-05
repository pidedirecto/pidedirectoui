import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Stepper } from 'src/components/Stepper';
import { CheckIcon } from 'src/icons/CheckIcon';

const steps = [
    {
        value: 1,
        label: 'Step 1',
    },
    {
        value: 2,
        label: 'Step 2',
    },
    {
        value: 3,
        label: 'Step 3',
    },
    {
        value: 4,
        label: 'Step 4',
    },
    {
        value: 5,
        label: 'Step 5',
    },
    {
        value: 6,
        label: 'Step 6',
    },
];

const meta: Meta<typeof Stepper> = {
    component: Stepper,
    args: {
        activeStep: 3,
        steps,
    },
    argTypes: {
        activeStep: {
            description: 'Current active step',
            type: {
                required: true,
                name: 'any' as any,
            },
            table: {
                type: { summary: 'any' },
            },
            control: false,
        },
        steps: {
            description: 'Steps array',
            type: {
                required: true,
                name: 'Array' as any,
            },
            table: {
                type: { summary: 'Array' },
            },
            control: false,
        },
        orientation: {
            description: 'Stepper orientation',
            table: {
                type: { summary: 'vertical | horizontal' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override stepper style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.stepIcon': {
            description: 'CSS class to override the step indicator container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        // @ts-ignore
        'classes.stepLabel': {
            description: 'CSS class to override the step indicator container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        // @ts-ignore
        'classes.stepLine': {
            description: 'CSS class to override the step indicator container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        // @ts-ignore
        'classes.activeStepLabel': {
            description: 'CSS class to override the step indicator container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const Horizontal: Story = {
    args: {
        ...meta.args,
        orientation: 'horizontal',
    },
};

export const CustomIcons: Story = {
    args: {
        ...meta.args,
        orientation: 'horizontal',
        steps: [
            ...steps,
            {
                value: 7,
                label: 'Step 7',
                content: <CheckIcon size={14} />,
            },
        ],
    },
};
