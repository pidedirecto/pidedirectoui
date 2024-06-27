/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from 'src/components/Button';
import { ConfirmDialog } from 'src/components/ConfirmDialog';
import { useConfirmDialog } from 'src/hooks/useConfirmDialog';

const meta: Meta<typeof ConfirmDialog> = {
    component: ConfirmDialog,
};
export default meta;

type Story = StoryObj<typeof ConfirmDialog>;

export const WarningConfirmDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const confirmDialog = useConfirmDialog();
        const handleClick = async () => {
            const confirm = await confirmDialog({
                title: 'Warning Dialog title',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero',
                acceptButtonText: 'Accept',
                cancelButtonText: 'Cancel',
                variant: 'warning',
            });
        };

        return (
            <div>
                <ConfirmDialog />
                <Button onClick={handleClick}>Open Warning Dialog</Button>
            </div>
        );
    },
};

export const ErrorConfirmDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const confirmDialog = useConfirmDialog();

        const handleClick = async () => {
            const confirm = await confirmDialog({
                title: 'Error Dialog title',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero',
                acceptButtonText: 'Accept',
                cancelButtonText: 'Cancel',
                variant: 'error',
            });
        };

        return (
            <div>
                <ConfirmDialog />
                <Button onClick={handleClick}>Open Error Dialog</Button>
            </div>
        );
    },
};

export const SuccessConfirmDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const confirmDialog = useConfirmDialog();

        const handleClick = async () => {
            const confirm = await confirmDialog({
                title: 'Success Dialog title',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero',
                acceptButtonText: 'Accept',
                cancelButtonText: 'Cancel',
                variant: 'success',
            });
        };

        return (
            <div>
                <ConfirmDialog />
                <Button onClick={handleClick}>Open Success Dialog</Button>
            </div>
        );
    },
};

export const NotificationConfirmDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const confirmDialog = useConfirmDialog();

        const handleClick = async () => {
            const confirm = await confirmDialog({
                title: 'Notification Dialog title',
                content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero',
                acceptButtonText: 'Accept',
                cancelButtonText: 'Cancel',
                variant: 'notification',
            });
        };

        return (
            <div>
                <ConfirmDialog />
                <Button onClick={handleClick}>Open Notification Dialog</Button>
            </div>
        );
    },
};
