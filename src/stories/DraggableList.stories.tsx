/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DraggableList } from 'src/components/DraggableList';
import { DraggableListItem } from 'src/components/DraggableListItem';

const meta: Meta<typeof DraggableList> = {
    component: DraggableList,
    args: {
        onDragEnd: (values: Array<any>) => alert('The sorted values are ' + values.join(', ')),
        children: (
            <>
                <DraggableListItem value={'1'}>Do the laundry</DraggableListItem>
                <DraggableListItem value={'2'}>Wash the dishes</DraggableListItem>
                <DraggableListItem value={'3'}>Clean my room</DraggableListItem>
            </>
        ),
    },
    argTypes: {
        onDragEnd: {
            description: 'Callback to be called when user drops the draggable list item',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override draggable list style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.container': {
            description: 'CSS class to override the container draggable list style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof DraggableList>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};
