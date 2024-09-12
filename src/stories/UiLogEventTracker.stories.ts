import type { Meta, StoryObj } from '@storybook/react';
import { UiLogEventTracker } from 'src/components/UiLogEventTracker';

const meta: Meta<typeof UiLogEventTracker> = {
    component: UiLogEventTracker,
    args: {
        id: 'id',
    },
    argTypes: {
        id: {
            description: 'ui log event tracker id',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        onInteract: {
            description: 'callback to be called when user interacts with components',
            type: {
                required: true,
                name: 'function',
            },
            table: {
                type: { summary: 'function' },
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof UiLogEventTracker>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};
