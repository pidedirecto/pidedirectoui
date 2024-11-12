import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment';
import React from 'react';
import { TimePicker } from 'src/components/TimePicker';
import { useConfigureMuiTheme } from 'src/utils/mui/useConfigureMuiTheme';

const meta: Meta<typeof TimePicker> = {
    component: TimePicker,
    args: {
        name: 'date',
        label: 'Select your birthday',
        value: new Date(),
    },
    argTypes: {
        name: {
            description: 'TimePicker name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        value: {
            description: 'TimePicker value',
            type: {
                required: true,
                name: 'date' as any,
            },
            table: {
                type: { summary: 'date' as any },
            },
            control: false,
        },
        label: {
            description: 'TimePicker label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        inputRef: {
            description: 'TimePicker React.Ref',
            table: {
                type: { summary: 'React.Ref' },
            },
            control: false,
        },
        helperText: {
            description: 'TimePicker helper text',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        placeholder: {
            description: 'TimePicker placeholder',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        id: {
            description: 'TimePicker id',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        disabled: {
            description: 'Disables TimePicker',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        error: {
            description: 'TimePicker error state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onChange: {
            description: 'TimePicker on change callback',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override TimePicker style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.inputContainer': {
            description: 'CSS class to override the TimePicker input container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.input': {
            description: 'CSS class to override the TimePicker input',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const muiTheme = useConfigureMuiTheme();

        return (
            <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
                <ThemeProvider theme={muiTheme}>
                    <TimePicker name='date' value={new Date()} label={'Select your birthday'} onChange={() => {}} />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        );
    },
};
