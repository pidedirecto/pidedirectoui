/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from 'src/components/Button';
import { Notifications } from 'src/components/Notifications';
import { useNotification } from 'src/hooks/useNotification';

const meta: Meta<typeof Notifications> = {
    component: Notifications,
    args: {},
    argTypes: {
        message: {
            description: 'Notification message',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        timeOpened: {
            description: 'Notifications variant',
            table: {
                type: { summary: 'number' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Notifications>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const notification = useNotification();

        const handleClick = () => {
            notification({ message: 'Hi! You have a new notification' });
        };

        return (
            <>
                <Button onClick={handleClick}>Click me!</Button>
                <Notifications />
            </>
        );
    },
};
