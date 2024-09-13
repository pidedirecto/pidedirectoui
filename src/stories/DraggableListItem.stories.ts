import type { Meta, StoryObj } from '@storybook/react';
import { DraggableListItem } from 'src/components/DraggableListItem';

const meta: Meta<typeof DraggableListItem> = {
    component: DraggableListItem,
    args: {
        value: '1',
    },
    argTypes: {
        value: {
            description: 'Draggable list item value',
            type: {
                required: true,
                name: 'any' as any,
            },
            table: {
                type: { summary: 'any' },
            },
            control: false,
        },
        iconColor: {
            description: 'Draggable list item icon color',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override draggable list item style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.container': {
            description: 'CSS class to override the container draggable list item style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.iconContainer': {
            description: 'CSS class to override the draggable list item icon container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof DraggableListItem>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};
