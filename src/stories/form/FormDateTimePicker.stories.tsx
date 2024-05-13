/**
 * @prettier
 */
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment/moment';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormDateTimePicker } from 'src/form/FormDateTimePicker';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';
import { useConfigureMuiTheme } from 'src/utils/mui/useConfigureMuiTheme';

const meta: Meta<typeof FormDateTimePicker> = {
    component: FormDateTimePicker,
    args: {
        name: 'date',
        label: 'Select your birthday',
    },
    argTypes: {
        name: {
            description: 'DateTimePicker name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            description: 'DateTimePicker label',
            table: {
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'DateTimePicker helper text',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'DateTimePicker default value',
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
        muiTheme: {
            description: 'MUI theme',
            table: {
                type: { summary: 'Object' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormDateTimePicker>;

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
                        <FormDateTimePicker name={'date'} label={'Select your birthday'} />
                    </ThemeProvider>
                </MuiPickersUtilsProvider>
            </Form>
        );
    },
};
