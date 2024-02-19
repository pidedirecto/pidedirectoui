/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import { ApiProvider } from 'src/components/app/ApiProvider';

const meta: Meta<typeof ApiProvider> = {
    component: ApiProvider,
    args: {
        api: {
            createUiLogEvent: () => {},
        },
    },
    argTypes: {
        api: {
            description: 'api object containing used callback functions',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'api.createUiLogEvent': {
            description: 'Function to be called when user interacts with ui components',
            table: {
                subcategory: 'api',
                type: { summary: 'function' },
            },
            control: false,
        },
        'api.createOfflineUiLogEvent': {
            description: 'Function to be called when there are offline ui log events',
            table: {
                subcategory: 'api',
                type: { summary: 'function' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof ApiProvider>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};
