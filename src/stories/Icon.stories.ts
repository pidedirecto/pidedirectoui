/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import { QuestionIcon } from 'src/icons/QuestionIcon';

const meta: Meta<typeof QuestionIcon> = {
    component: QuestionIcon,
    args: {
        color: '#06B7A2',
    },
    argTypes: {
        width: {
            description: 'SVG width',
            table: {
                type: { summary: 'number' },
            },
            control: false,
        },
        height: {
            description: 'SVG height',
            table: {
                type: { summary: 'number' },
            },
            control: false,
        },
        size: {
            description: 'SVG width and height',
            table: {
                type: { summary: 'number' },
            },
            control: false,
        },
        color: {
            description: 'SVG color',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        title: {
            description: 'SVG title',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof QuestionIcon>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const Size: Story = {
    args: {
        ...meta.args,
        width: 15,
        height: 15,
        color: '#3279a8',
    },
};

export const Title: Story = {
    args: {
        ...meta.args,
        color: '#3279a8',
        title: 'Do you need help?',
    },
};
