/**
 * @prettier
 */

import type { Meta, StoryObj } from '@storybook/react';
import { ScheduleDaySelect } from 'src/components/ScheduleDaySelect';

const meta: Meta<typeof ScheduleDaySelect> = {
    component: ScheduleDaySelect,
    args: {
        value: 'Mo 10:00-17:00',
        label: 'Select your schedule',
        onChange: () => {},
    },
    argTypes: {
        value: {
            description: 'ScheduleDaySelect value, should be a string in opening hours format',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        label: {
            description: 'ScheduleDaySelect main label',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        scheduleLabel: {
            description: 'ScheduleDaySelect time pickers label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        daysTranslations: {
            description: 'ScheduleDaySelect time pickers label',
            table: {
                type: { summary: 'Object' },
            },
            control: false,
        },
        disabled: {
            description: 'disables ScheduleDaySelect',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        error: {
            description: 'ScheduleDaySelect error state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onChange: {
            description: 'ScheduleDaySelect onChange callback',
            type: {
                required: true,
                name: 'function',
            },
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof ScheduleDaySelect>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};

export const SecondaryLabel: Story = {
    args: {
        ...meta.args,
        label: 'Select days',
        scheduleLabel: 'Select schedule',
    },
};

export const Translated: Story = {
    args: {
        ...meta.args,
        label: 'Select days',
        scheduleLabel: 'Select schedule',
        daysTranslations: {
            Mo: 'L',
            Tu: 'M',
            We: 'M',
            Th: 'J',
            Fr: 'V',
            Sa: 'S',
            Su: 'D',
        },
    },
};
