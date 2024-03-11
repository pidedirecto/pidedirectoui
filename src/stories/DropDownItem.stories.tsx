/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import { DropDownItem } from 'src/components/DropDownItem';

const meta: Meta<typeof DropDownItem> = {
    component: DropDownItem,
    args: {
        children: 'Item 1',
    },
    argTypes: {
        selected: {
            description: 'If the dropdown item is selected, only for accessibility purposes, it is the aria-selected html prop',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override dropdown item style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.container': {
            description: 'CSS class to override the dropdown item style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof DropDownItem>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};
