import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'src/components/Text';

const meta: Meta<typeof Text> = {
    component: Text,
    args: {
        children: 'Some text',
    },
    argTypes: {
        weight: {
            description: 'Text font weight',
            table: {
                type: { summary: 'light | regular | medium | semiBold | bold' },
            },
            control: false,
        },
        size: {
            description: 'Text font size',
            table: {
                type: { summary: 'small | regular | large | extraLarge' },
            },
            control: false,
        },
        variant: {
            description: 'Text variant',
            table: {
                type: { summary: 'title | subtitle | paragraph' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        ...meta.args,
        onChange: undefined,
    },
};

export const Light: Story = {
    args: {
        ...meta.args,
        weight: 'light',
        onChange: undefined,
    },
};

export const Bold: Story = {
    args: {
        ...meta.args,
        weight: 'bold',
        onChange: undefined,
    },
};

export const Small: Story = {
    args: {
        ...meta.args,
        size: 'small',
        onChange: undefined,
    },
};

export const Large: Story = {
    args: {
        ...meta.args,
        size: 'large',
        onChange: undefined,
    },
};

export const Title: Story = {
    args: {
        ...meta.args,
        variant: 'title',
        children: 'Im a title',
    },
};

export const Subtitle: Story = {
    args: {
        ...meta.args,
        variant: 'subtitle',
    },
};

export const Paragraph: Story = {
    args: {
        ...meta.args,
        variant: 'paragraph',
    },
};
