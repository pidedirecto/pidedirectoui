/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from 'src/components/Button';
import { Dialog } from 'src/components/Dialog';
import { DialogActions } from 'src/components/DialogActions';

const meta: Meta<typeof Dialog> = {
    component: Dialog,
    args: {
        open: false,
    },
    argTypes: {
        open: {
            description: 'Dialog open state',
            type: {
                required: true,
                name: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        loading: {
            description: 'Shows a loading indicator',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        keepMounted: {
            description: 'Sets if dialog should keep mounted on dom after closing it',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onClose: {
            description: 'Function to be called when user wants to close the dialog',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        title: {
            description: 'Dialog title',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        position: {
            description: 'Dialog position, by default is centered',
            table: {
                type: { summary: 'right | top | bottom | left' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override dialog style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.dialogContainer': {
            description: 'CSS class to override the dialog container style',
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
        'classes.title': {
            description: 'CSS class to override the dialog title style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <div>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    This is the dialog content
                </Dialog>
            </div>
        );
    },
};

export const TopDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <div>
                <Button onClick={() => setOpen(true)}>Open top Dialog</Button>
                <Dialog open={open} onClose={() => setOpen(false)} position='top'>
                    This is the dialog content
                </Dialog>
            </div>
        );
    },
};

export const RightDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <div>
                <Button onClick={() => setOpen(true)}>Open right Dialog</Button>
                <Dialog open={open} onClose={() => setOpen(false)} position='right'>
                    This is the dialog content
                </Dialog>
            </div>
        );
    },
};

export const BottomDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <div>
                <Button onClick={() => setOpen(true)}>Open bottom Dialog</Button>
                <Dialog open={open} onClose={() => setOpen(false)} position='bottom'>
                    This is the dialog content
                </Dialog>
            </div>
        );
    },
};

export const LeftDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <div>
                <Button onClick={() => setOpen(true)}>Open left Dialog</Button>
                <Dialog open={open} onClose={() => setOpen(false)} position='left'>
                    This is the dialog content
                </Dialog>
            </div>
        );
    },
};

export const DialogActionsDialog: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <div>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    This is the dialog content
                    <DialogActions>
                        <Button variant='secondary'>Cancel</Button>
                        <Button>Accept</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    },
};
