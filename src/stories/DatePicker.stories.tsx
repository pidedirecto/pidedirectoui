/**
 * @prettier
 */
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment';
import React from 'react';
import { DatePicker } from 'src/components/DatePicker';
import { useConfigureMuiTheme } from 'src/utils/mui/useConfigureMuiTheme';

const meta: Meta<typeof DatePicker> = {
    component: DatePicker,
    args: {
        name: 'date',
        label: 'Select your birthday',
        value: new Date(),
    },
    argTypes: {
        name: {
            description: 'DatePicker name',
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
            description: 'DatePicker value',
            type: {
                required: true,
                name: 'date' as any,
            },
            table: {
                type: { summary: 'date' as any },
            },
            control: false,
        },
        minDate: {
            description: 'DatePicker minDate',
            table: {
                type: { summary: 'Date' as any },
            },
            control: false,
        },
        maxDate: {
            description: 'DatePicker maxDate',
            table: {
                type: { summary: 'Date' as any },
            },
            control: false,
        },
        label: {
            description: 'DatePicker label',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        inputRef: {
            description: 'DatePicker React.Ref',
            table: {
                type: { summary: 'React.Ref' },
            },
            control: false,
        },
        helperText: {
            description: 'DatePicker helper text',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        placeholder: {
            description: 'DatePicker placeholder',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        id: {
            description: 'DatePicker id',
            table: {
                type: { summary: 'string' },
            },
            control: false,
        },
        disabled: {
            description: 'Disables DatePicker',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        error: {
            description: 'DatePicker error state',
            table: {
                type: { summary: 'boolean' },
            },
            control: false,
        },
        onChange: {
            description: 'DatePicker on change callback',
            table: {
                type: { summary: 'function' },
            },
            control: false,
        },
        classes: {
            description: 'Classes object to override DatePicker style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.inputContainer': {
            description: 'CSS class to override the DatePicker input container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.input': {
            description: 'CSS class to override the DatePicker input',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const muiTheme = useConfigureMuiTheme();

        return (
            <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
                <ThemeProvider theme={muiTheme}>
                    <DatePicker name='date' value={new Date()} label={'Select your birthday'} onChange={() => {}} />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        );
    },
};
