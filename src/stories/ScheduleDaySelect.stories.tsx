/**
 * @prettier
 */

import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment/moment';
import React from 'react';
import { ScheduleDaySelect } from 'src/components/ScheduleDaySelect';
import { useConfigureMuiTheme } from 'src/utils/mui/useConfigureMuiTheme';

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
        muiTheme: {
            description: 'MUI theme for time pickers',
            table: {
                type: { summary: 'Object' },
            },
            control: false,
        },
        momentInstance: {
            description: 'moment object instance for time pickers',
            table: {
                type: { summary: 'Object' },
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
    render: () => {
        const muiTheme = useConfigureMuiTheme();

        return (
            <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
                <ThemeProvider theme={muiTheme}>
                    <ScheduleDaySelect label={'Select your schedule'} value={'Mo 10:00-17:00'} onChange={() => {}} />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        );
    },
};

export const SecondaryLabel: Story = {
    args: {
        ...meta.args,
        label: 'Select days',
        scheduleLabel: 'Select schedule',
    },
    render: () => {
        const muiTheme = useConfigureMuiTheme();

        return (
            <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
                <ThemeProvider theme={muiTheme}>
                    <ScheduleDaySelect label={'Select your schedule'} value={'Mo 10:00-17:00'} scheduleLabel={'Select schedule'} onChange={() => {}} />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        );
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
    render: () => {
        const muiTheme = useConfigureMuiTheme();

        return (
            <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
                <ThemeProvider theme={muiTheme}>
                    <ScheduleDaySelect
                        label={'Select your schedule'}
                        value={'Mo 10:00-17:00'}
                        daysTranslations={{
                            Mo: 'L',
                            Tu: 'M',
                            We: 'M',
                            Th: 'J',
                            Fr: 'V',
                            Sa: 'S',
                            Su: 'D',
                        }}
                        scheduleLabel={'Select schedule'}
                        onChange={() => {}}
                    />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        );
    },
};
