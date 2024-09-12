import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Accordion } from 'src/components/Accordion';
import { Button } from 'src/components/Button';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    args: {
        children: <p>Hi! I'm hidden inside an accordion</p>,
        title: 'This is an accordion',
        onChange: undefined,
    },
    argTypes: {
        open: {
            description: 'Controls opening the accordion',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        defaultOpened: {
            description: 'Sets if accordion should be initially opened',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        title: {
            description: 'Titles the accordion content',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        subText: {
            description: 'Additional text below the title',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        iconTitle: {
            description: 'Icon title for the svg inside the accordion button',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        children: {
            description: 'Accordion content',
            type: {
                required: true,
                name: 'React.Node' as any,
            },
            table: {
                type: { summary: 'React.Node' },
            },
            control: false,
        },
        onChange: {
            description: 'Callback to be called after the user hides or shows the accordion',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        renderIcon: {
            description: 'Function to render a left icon and replace the default one',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override accordion style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.title': {
            description: 'CSS class to override the title style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.subText': {
            description: 'CSS class to override the subtext style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.container': {
            description: 'CSS class to override the accordion container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.accordion': {
            description: 'CSS class to override the accordion content container',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const Controlled: Story = {
    args: {
        ...meta.args,
    },
    render: () => <ControlledAccordion />,
};

const ControlledAccordion = () => {
    const [accordionState, setAccordionState] = useState(false);

    const toggleAccordion = () => setAccordionState(!accordionState);

    return (
        <div>
            <Button onClick={toggleAccordion}>Click me to toggle the content!</Button>
            <Accordion open={accordionState} onChange={toggleAccordion}>
                <p>Hi! I'm hidden inside an accordion</p>
            </Accordion>
        </div>
    );
};

export const CustomIcon: Story = {
    args: {
        ...meta.args,
        renderIcon: (accordionState: boolean) => (accordionState ? 'Close me!' : 'Open me!'),
    },
};

export const Subtext: Story = {
    args: {
        ...meta.args,
        subText: 'This accordion has some important info, open it!',
    },
};
