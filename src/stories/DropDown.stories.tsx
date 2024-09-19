import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DropDown } from 'src/components/DropDown';
import { DropDownItem } from 'src/components/DropDownItem';
import { ListIcon } from 'src/icons/ListIcon';

const meta: Meta<typeof DropDown> = {
    component: DropDown,
    args: {
        content: 'Show items',
        children: (
            <>
                <DropDownItem>Item 1</DropDownItem>
                <DropDownItem>Item 2</DropDownItem>
                <DropDownItem>Item 3</DropDownItem>
            </>
        ),
    },
    argTypes: {
        content: {
            description: 'DropDown content',
            table: {
                type: { summary: 'React.Node' },
            },
            control: false,
        },
        variant: {
            description: 'DropDown variant, same as button',
            table: {
                type: { summary: 'secondary | outline | text | icon' },
            },
            control: false,
        },
        position: {
            description: 'DropDown position, default is right',
            table: {
                type: { summary: 'right | left' },
            },
            control: false,
        },
        disabled: {
            description: 'Disables dropdown',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        preventClose: {
            description: 'Prevents dropdown close after click on dropdown item',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        id: {
            description: 'Dropdown button id',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        badge: {
            description: 'Button badge',
            table: {
                type: { summary: 'React.ReactNode' },
            },
            control: false,
        },
        onOpen: {
            description: 'DropDown on open callback',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override dropdown style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.container': {
            description: 'CSS class to override the container dropdown style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.button': {
            description: 'CSS class to override the button dropdown style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.dropdown': {
            description: 'CSS class to override the dropdown items container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof DropDown>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const CustomContent: Story = {
    args: {
        ...meta.args,
        content: <div style={{ color: 'red' }}>Hi! I'm a custom content</div>,
    },
};

export const Icon: Story = {
    args: {
        ...meta.args,
        variant: 'icon',
        content: <ListIcon />,
    },
};

export const LeftPosition: Story = {
    args: {
        ...meta.args,
        variant: 'icon',
        position: 'left',
        content: <ListIcon />,
    },
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <DropDown content={'Show items'} position={'left'}>
                    <DropDownItem>Item 1</DropDownItem>
                    <DropDownItem>Item 2</DropDownItem>
                    <DropDownItem>Item 3</DropDownItem>
                </DropDown>
            </div>
        );
    },
};
