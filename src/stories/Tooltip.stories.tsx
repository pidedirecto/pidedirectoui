/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from 'src/components/Tooltip';

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    args: {
        text: 'You found me!',
    },
    argTypes: {
        id: {
            description: 'Tooltip container HTML id',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        text: {
            description: 'Tooltip message',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        type: {
            description: 'Tooltip type',
            table: {
                type: { summary: 'error' },
            },
            control: false,
        },
        forceOpen: {
            description: 'Force open the tooltip',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        position: {
            description: 'Tooltip position',
            table: {
                type: { summary: 'top | bottom | left | right' },
            },
            control: false,
        },
        children: {
            description: 'Content that will have the tooltip',
            type: {
                required: true,
                name: 'React.Node' as any,
            },
            table: {
                type: { summary: 'React.Node' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override tooltip style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.text': {
            description: 'CSS class to override the text style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const Children: Story = {
    args: {
        ...meta.args,
        children: <div>Hover me!</div>,
    },
};

export const Top: Story = {
    args: {
        ...meta.args,
        position: 'top',
    },
};

export const Bottom: Story = {
    args: {
        ...meta.args,
        position: 'bottom',
    },
};

export const Left: Story = {
    args: {
        ...meta.args,
        position: 'left',
    },
};

export const Right: Story = {
    args: {
        ...meta.args,
        position: 'right',
    },
};

export const Error: Story = {
    args: {
        ...meta.args,
        type: 'error',
    },
};
