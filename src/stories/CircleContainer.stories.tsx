/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CircleIconContainer } from 'src/components/CircleIconContainer';
import { SaveIcon } from 'src/icons/SaveIcon';

const meta: Meta<typeof CircleIconContainer> = {
    component: CircleIconContainer,
    args: {
        children: <p>Hi! I'm hidden inside an circle Container</p>,
    },
    argTypes: {
        disabled: {
            description: 'Disables the CircleIconContainer',
            table: {
                required: false,
                type: { summary: 'boolean' },
            },
        },
        children: {
            description: 'CircleIconContainer content',
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
            description: 'Classes object to override CircleIconContainer style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.container': {
            description: 'CSS class to override the CircleIconContainer container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof CircleIconContainer>;

export const Controlled: Story = {
    args: {
        ...meta.args,
    },
    render: () => <ControlledCircleContainer />,
};

const ControlledCircleContainer = () => {
    return (
        <CircleIconContainer>
            <SaveIcon />
        </CircleIconContainer>
    );
};
