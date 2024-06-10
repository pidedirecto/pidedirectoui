/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from 'src/components/Button';
import { ConfirmDialog } from 'src/components/ConfirmDialog';

const meta: Meta<typeof ConfirmDialog> = {
    component: ConfirmDialog,
    args: {
        open: true,
        title: 'ConfirmDialog Title',
        content: 'ConfirmDialog Content',
        onClose: undefined,
    },
    argTypes: {
        open: {
            description: 'Controls opening the confirmDialog',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onClose: {
            description: 'Controls close the confirmDialog',
            table: {
                required: false,
                type: { summary: 'Function' },
            },
            control: false,
        },
        onCancel: {
            description: 'Control the action taken when canceling',
            table: {
                required: false,
                type: { summary: 'Function' },
            },
            control: false,
        },
        onAccept: {
            description: 'Control the action taken when accepting',
            table: {
                required: false,
                type: { summary: 'Function' },
            },
            control: false,
        },
        acceptButtonText: {
            description: 'Text inside the accept button',
            table: {
                required: false,
                type: { summary: 'string' },
            },
            control: false,
        },
        cancelButtonText: {
            description: 'Text inside the cancel button',
            table: {
                required: false,
                type: { summary: 'string' },
            },
            control: false,
        },
        title: {
            description: 'Titles the ConfirmDialog',
            table: {
                required: false,
                type: { summary: 'string' },
            },
            control: false,
        },
        content: {
            description: 'Content show inside ConfirmDialog',
            table: {
                required: false,
                type: { summary: 'string' },
            },
            control: false,
        },
        variant: {
            description: 'ConfirmDialog variant',
            table: {
                required: false,
                type: { summary: 'warning | error | success | notification' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override ConfirmDialog style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.title': {
            description: 'CSS class to override the title style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.dialog': {
            description: 'CSS class to override the dialog style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.message': {
            description: 'CSS class to override the message style',
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
        const [confirmDialogState, setConfirmDialogState] = useState(false);

        const openConfirmDialogState = () => setConfirmDialogState(true);
        const onCloseConfirmDialogState = () => setConfirmDialogState(false);

        return (
            <div>
                <ConfirmDialog
                    open={confirmDialogState}
                    onClose={onCloseConfirmDialogState}
                    title={'Warning Dialog title'}
                    content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero`}
                    acceptButtonText={'Accept'}
                    cancelButtonText={'Cancel'}
                    variant={'warning'}
                />
                <Button onClick={openConfirmDialogState}>Open Warning Dialog</Button>
            </div>
        );
    },
};

export const ErrorConfirmDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [confirmDialogState, setConfirmDialogState] = useState(false);
        const openConfirmDialogState = () => setConfirmDialogState(true);
        const onCloseConfirmDialogState = () => setConfirmDialogState(false);
        return (
            <div>
                <ConfirmDialog
                    open={confirmDialogState}
                    onClose={onCloseConfirmDialogState}
                    title={'Error Dialog title'}
                    content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero`}
                    variant={'error'}
                    acceptButtonText={'Accept'}
                    cancelButtonText={'Cancel'}
                />
                <Button onClick={openConfirmDialogState}>Open Error Dialog</Button>
            </div>
        );
    },
};

export const SuccessConfirmDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [confirmDialogState, setConfirmDialogState] = useState(false);
        const openConfirmDialogState = () => setConfirmDialogState(true);
        const onCloseConfirmDialogState = () => setConfirmDialogState(false);

        return (
            <div>
                <ConfirmDialog
                    open={confirmDialogState}
                    onClose={onCloseConfirmDialogState}
                    title={'Success Dialog title'}
                    content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero`}
                    variant={'success'}
                    acceptButtonText={'Accept'}
                    cancelButtonText={'Cancel'}
                />
                <Button onClick={openConfirmDialogState}>Open Success Dialog</Button>
            </div>
        );
    },
};

export const NotificationConfirmDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [confirmDialogState, setConfirmDialogState] = useState(false);
        const openConfirmDialogState = () => setConfirmDialogState(true);
        const onCloseConfirmDialogState = () => setConfirmDialogState(false);

        return (
            <div>
                <ConfirmDialog
                    open={confirmDialogState}
                    onClose={onCloseConfirmDialogState}
                    title={'Notification Dialog title'}
                    content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ultricies ipsum. Fusce turpis sem, facilisis id dignissim et, dignissim commodo turpis. Morbi massa libero`}
                    variant={'notification'}
                    acceptButtonText={'Accept'}
                    cancelButtonText={'Cancel'}
                />
                <Button onClick={openConfirmDialogState}>Open Notification Dialog</Button>
            </div>
        );
    },
};
