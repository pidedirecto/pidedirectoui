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
    args: {
        title: 'Confirm Dialog title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero',
        acceptButtonText: 'Accept',
        cancelButtonText: 'Cancel',
    },
    argTypes: {
        title: {
            description: 'Title of the dialog',
            table: {
                required: false,
                type: { summary: 'string' },
            },
        },
        content: {
            description: 'Content of the dialog',
            table: {
                required: false,
                type: { summary: 'string' },
            },
        },
        acceptButtonText: {
            description: 'Text of the accept button',
            table: {
                required: false,
                type: { summary: 'string' },
            },
        },
        cancelButtonText: {
            description: 'Text of the cancel button',
            table: {
                required: false,
                type: { summary: 'string' },
            },
        },
        timeoutSeconds: {
            description: 'Number of seconds to wait before closing the dialog',
            table: {
                required: false,
                type: { summary: 'number' },
            },
        },
        variant: {
            description: 'Variant of the dialog',
            table: {
                required: false,
                type: { summary: 'number' },
            },
        },
        classes: {
            description: 'Classes object to override confirm dialog style',
            table: {
                required: false,
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.acceptButton': {
            description: 'CSS class to override the accept button style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.cancelButton': {
            description: 'CSS class to override the cancel button style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.title': {
            description: 'CSS class to override the title style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.textContent': {
            description: 'CSS class to override the text content style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.icon': {
            description: 'CSS class to override the icon style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
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
