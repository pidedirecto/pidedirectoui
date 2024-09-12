import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chip } from 'src/components/Chip';
import { EditIcon } from 'src/icons/EditIcon';

const meta: Meta<typeof Chip> = {
    component: Chip,
    args: {
        onClick: undefined,
    },
    argTypes: {
        variant: {
            description: 'Chip variant',
            table: {
                type: { summary: 'error | warning | success | info | secondary' },
            },
            control: false,
        },
        disabled: {
            description: 'disables Chip',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onClick: {
            description: 'callback to be called when the Chip component is clicked',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override Chip style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.chip': {
            description: 'CSS class to override the chip style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
    args: {
        ...meta.args,
        children: "I'm a chip",
    },
};

export const Error: Story = {
    args: {
        ...meta.args,
        variant: 'error',
        children: "I'm a chip",
    },
};

export const Warning: Story = {
    args: {
        ...meta.args,
        variant: 'warning',
        children: "I'm a chip",
    },
};

export const Success: Story = {
    args: {
        ...meta.args,
        variant: 'success',
        children: "I'm a chip",
    },
};

export const Info: Story = {
    args: {
        ...meta.args,
        variant: 'info',
        children: "I'm a chip",
    },
};

export const Secondary: Story = {
    args: {
        ...meta.args,
        variant: 'secondary',
        children: "I'm a chip",
    },
};

export const Clickable: Story = {
    args: {
        ...meta.args,
        onClick: () => alert('You click on the chip!!'),
        children: (
            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                Edit
                <EditIcon size={10} />
            </div>
        ),
    },
};
