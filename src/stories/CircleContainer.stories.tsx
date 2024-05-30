/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CircleContainer } from 'src/components/CircleContainer';
import { SaveIcon } from 'src/icons/SaveIcon';

const meta: Meta<typeof CircleContainer> = {
    component: CircleContainer,
    args: {
        children: <p>Hi! I'm hidden inside an circle Container</p>,
    },
    argTypes: {
        disabled: {
            description: 'Disables the CircleContainer',
            table: {
                required: false,
                type: { summary: 'boolean' },
            },
        },
        children: {
            description: 'CircleContainer content',
            type: {
                required: true,
                name: 'React.Node' as any,
            },
            table: {
                type: { summary: 'React.Node' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override CircleContainer style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.container': {
            description: 'CSS class to override the CircleContainer container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof CircleContainer>;

export const Controlled: Story = {
    args: {
        ...meta.args,
    },
    render: () => <ControlledCircleContainer />,
};

const ControlledCircleContainer = () => {
    return (
        <CircleContainer>
            <SaveIcon />
        </CircleContainer>
    );
};
