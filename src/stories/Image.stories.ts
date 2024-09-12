import type { Meta, StoryObj } from '@storybook/react';
import { Image } from 'src/components/Image';

const meta: Meta<typeof Image> = {
    component: Image,
    args: {
        src: 'https://images.letseat.mx/e4a9ed780b54925264e4ac45761707f0.png',
        width: 100,
    },
    argTypes: {
        src: {
            description: 'Image source',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        width: {
            description: 'Image width, used height if not passed',
            table: {
                type: { summary: 'number' },
            },
            control: false,
        },
        height: {
            description: 'Image height, used width if not passed',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        size: {
            description: 'Image size',
            table: {
                type: { summary: 'ImageSize' },
            },
            control: false,
        },
        fitIn: {
            description: 'Makes image fit-in in image size',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const FitIn: Story = {
    args: {
        ...meta.args,
        width: 100,
        height: 200,
        fitIn: true,
    },
};

export const NotFitIn: Story = {
    args: {
        ...meta.args,
        width: 100,
        height: 200,
    },
};
