/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from 'src/components/Loader';

const meta: Meta<typeof Loader> = {
    component: Loader,
    args: {
        loading: true,
    },
    argTypes: {
        loading: {
            control: 'boolean',
        },
        text: {
            description: 'text show in loader',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
    args: {
        loading: true,
        text: 'Loading...',
    },
};
