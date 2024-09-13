import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment/moment';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormDatePicker } from 'src/form/FormDatePicker';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';
import { useConfigureMuiTheme } from 'src/utils/mui/useConfigureMuiTheme';

const meta: Meta<typeof FormDatePicker> = {
    component: FormDatePicker,
    args: {
        name: 'date',
        label: 'Select your birthday',
    },
    argTypes: {
        name: {
            description: 'DatePicker name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        minDate: {
            description: 'DatePicker minDate',
            table: {
                type: { summary: 'Date' as any },
            },
        },
        maxDate: {
            description: 'DatePicker maxDate',
            table: {
                type: { summary: 'Date' as any },
            },
        },
        label: {
            description: 'DatePicker label',
            table: {
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'DatePicker helper text',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'DatePicker default value',
            table: {
                type: { summary: 'boolean' },
            },
        },
        disabled: {
            description: 'Disables input',
            table: {
                type: { summary: 'boolean' },
            },
        },
        required: {
            description: `Sets date picker as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
            table: {
                type: { summary: 'boolean | object' },
            },
        },
        rules: {
            description: createLink('https://react-hook-form.com/docs/useform/register#options', 'Rules object'),
            table: {
                type: { summary: 'object' },
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormDatePicker>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();
        const muiTheme = useConfigureMuiTheme();

        return (
            <Form form={form} onSubmit={() => {}}>
                <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
                    <ThemeProvider theme={muiTheme}>
                        <FormDatePicker name={'date'} label={'Select your birthday'} />
                    </ThemeProvider>
                </MuiPickersUtilsProvider>
            </Form>
        );
    },
};
