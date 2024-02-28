/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from 'src/components/Button';
import { CrossIcon } from 'src/icons/CrossIcon';

const meta: Meta<typeof Button> = {
    component: Button,
    args: {
        children: "Hi! I'm a button",
    },
    argTypes: {
        variant: {
            description: 'Button variant',
            table: {
                type: { summary: 'secondary | outline | text | icon' },
            },
            control: false,
        },
        size: {
            description: 'Button size',
            table: {
                type: { summary: 'large' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override button style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.button': {
            description: 'CSS class to override the button style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const Secondary: Story = {
    args: {
        ...meta.args,
        variant: 'secondary',
    },
};

export const Outline: Story = {
    args: {
        ...meta.args,
        variant: 'outline',
    },
};

export const Text: Story = {
    args: {
        ...meta.args,
        variant: 'text',
    },
};

export const Icon: Story = {
    args: {
        ...meta.args,
        variant: 'icon',
        children: <CrossIcon />,
    },
};
