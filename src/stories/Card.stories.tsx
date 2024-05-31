/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from 'src/components/Card';

const meta: Meta<typeof Card> = {
    component: Card,
    args: {
        children: <p>Information shown on card</p>,
        title: 'This is an Card',
    },
    argTypes: {
        title: {
            description: 'Titles the card content',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        children: {
            description: 'card content',
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
            description: 'Classes object to override card style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.cardContainer': {
            description: 'CSS class to override the container card style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.cardTitle': {
            description: 'CSS class to override the title card style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.cardContent': {
            description: 'CSS class to override the content card style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Controlled: Story = {
    args: {
        ...meta.args,
    },
    render: () => (
        <Card title={'Card title content'}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero,
                faucibus ut viverra et, fringilla non felis. Aliquam erat volutpat. Quisque fermentum metus vel eros ornare, bibendum tristique dui eleifend. Ut at arcu a magna egestas consectetur in
                ultricies velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
        </Card>
    ),
};
