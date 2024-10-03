import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonLoader } from 'src/components/SkeletonLoader';

const meta: Meta<typeof SkeletonLoader> = {
    component: SkeletonLoader,
    args: {
        variant: 'notification',
    },
    argTypes: {
        variant: {
            description: 'Skeleton variant',
            table: {
                type: { summary: 'notification' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof SkeletonLoader>;

export const Notification: Story = {
    args: {
        ...meta.args,
    },
};

export const Card: Story = {
    args: {
        ...meta.args,
        variant: 'card',
    },
};

export const Text: Story = {
    args: {
        ...meta.args,
        variant: 'text',
    },
};
