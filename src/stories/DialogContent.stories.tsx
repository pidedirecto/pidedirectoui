/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from 'src/components/Button';
import { Dialog } from 'src/components/Dialog';
import { DialogContent } from 'src/components/DialogContent';

const meta: Meta<typeof DialogContent> = {
    component: DialogContent,
    args: {
        children: <div>Dialog content</div>,
        className: '',
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional class name(s) to apply to the container',
        },
    },
};

export default meta;

type Story = StoryObj<typeof DialogContent>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);

        return (
            <div>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogContent {...args} />
                </Dialog>
            </div>
        );
    },
};
