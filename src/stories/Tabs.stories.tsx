/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs } from 'src/components/Tabs';

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    args: {
        onChangeTab: undefined,
    },
    argTypes: {
        tabs: {
            description: 'Array of objects containing the info for each tab',
            type: {
                required: true,
                name: 'array' as any,
            },
            table: {
                type: { summary: 'array' },
            },
            control: false,
        },
        loading: {
            description: 'Shows a loading indicator at the bottom of the tabs',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        defaultValue: {
            description: 'Tab selected by default, it should be one of the tabs value',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        onChangeTab: {
            description: 'Callback to be called each time the user changes the tab',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        tabsHeader: {
            description: 'Content to be rendered as the header of the sections',
            table: {
                type: { summary: 'React.Node' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override tabs style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.container': {
            description: 'CSS class to override the container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.tab': {
            description: 'CSS class to override the individual tab style, this will be applied to all the tabs',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.tabs': {
            description: 'CSS class to override the tabs container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.tabContent': {
            description: 'CSS class to override the content container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.selectedTab': {
            description: 'CSS class to override the selected tab style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.badge': {
            description: 'CSS class to override the badge style, this will be applied to all the badges',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.selectedBadge': {
            description: 'CSS class to override the selected badge style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.headerTabs': {
            description: 'CSS class to override the tabs container style, this container includes the loading indicator too',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        ...meta.args,
        tabs: [
            {
                label: 'Tab 1',
                value: '1',
            },
            {
                label: 'Tab 2',
                value: '2',
            },
            {
                label: 'Tab 3',
                value: '3',
            },
        ],
        children: [<div>Content 1</div>, <div>Content 2</div>, <div>Content 3</div>],
    },
};

export const Badge: Story = {
    args: {
        ...meta.args,
        tabs: [
            {
                label: 'Tab 1',
                value: '1',
                badge: 1,
            },
            {
                label: 'Tab 2',
                value: '2',
            },
        ],
        children: [<div>Content 1</div>, <div>Content 2</div>],
    },
};

export const TabsHeader: Story = {
    args: {
        ...meta.args,
        tabs: [
            {
                label: 'Tab 1',
                value: '1',
                badge: 1,
            },
            {
                label: 'Tab 2',
                value: '2',
            },
        ],
        tabsHeader: <div>Content header shared across tabs</div>,
        children: [<div>Content 1</div>, <div>Content 2</div>],
    },
};
