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
            description: 'Loading state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        size: {
            description: 'Loader size',
            table: {
                type: { summary: 'number' },
            },
            control: false,
        },
        text: {
            description: 'Text shown in loader',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override loader style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.container': {
            description: 'CSS class to override the loader container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.text': {
            description: 'CSS class to override the text style',
            table: {
                subcategory: 'Classes API',
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
