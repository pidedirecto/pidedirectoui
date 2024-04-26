/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { VirtualizedList } from 'src/components/VirtualizedList';

const meta: Meta<typeof VirtualizedList> = {
    component: VirtualizedList,
    argTypes: {
        height: {
            description: 'Height to show List content',
            defaultValue: 800,
            type: {
                required: false,
                name: 'number',
            },
        },
        width: {
            description: 'Width to show List content',
            type: {
                required: false,
                name: 'number',
            },
        },
        itemSize: {
            description: 'Size for each List Item',
            defaultValue: 150,
            type: {
                required: false,
                name: 'number',
            },
        },
        overScanCount: {
            description: 'This allows you to define how many elements outside the visible "window" will be rendered at all times.',
        },
        orientation: {
            description: 'This property is assigned to the layout and allows to have a horizontal list, by default it is vertical.',
            type: {
                required: false,
                name: 'string',
            },
        },
        children: {
            description: 'List content',
            type: {
                required: false,
                name: 'React.Node' as any,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof VirtualizedList>;

export const Controlled: Story = {
    args: {
        ...meta.args,
    },
    render: () => (
        <VirtualizedList>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
            <div>Item 8</div>
            <div>Item 9</div>
            <div>Item 10</div>
        </VirtualizedList>
    ),
};

export const Horizontal: Story = {
    args: {
        ...meta.args,
        orientation: 'horizontal',
        width: 800,
        height: 60,
        itemSize: 50,
    },
    render: () => (
        <VirtualizedList orientation={'horizontal'} width={800} height={60} itemSize={150}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
            <div>Item 8</div>
            <div>Item 9</div>
            <div>Item 10</div>
        </VirtualizedList>
    ),
};
