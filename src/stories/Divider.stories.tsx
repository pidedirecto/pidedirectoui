import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from 'src/components/Divider';

const meta: Meta<typeof Divider> = {
    component: Divider,
    argTypes: {
        variant: {
            description: 'Divider line style',
            table: {
                type: { summary: 'solid | dashed | dotted' },
            },
            defaultValue: 'solid',
            control: false,
        },
        orientation: {
            description: 'Divider orientation',
            table: {
                type: { summary: 'horizontal | vertical' },
            },
            defaultValue: 'horizontal',
            control: false,
        },
        classes: {
            description: 'Classes object to override Divider style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.divider': {
            description: 'CSS class to override the Divider style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const BasicDivider: Story = {
    args: {
        ...meta.args,
    },
};

export const Vertical: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        return (
            <div style={{ width: '10px', height: '40px' }}>
                <Divider variant='dashed' orientation={'vertical'} />
            </div>
        );
    },
};
export const Dashed: Story = {
    args: {
        ...meta.args,
        variant: 'dashed',
    },
};

export const Dotted: Story = {
    args: {
        ...meta.args,
        variant: 'dotted',
    },
};
