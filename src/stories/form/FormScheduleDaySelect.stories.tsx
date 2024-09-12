import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import type { Meta, StoryObj } from '@storybook/react';
import moment from 'moment/moment';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormScheduleDaySelect } from 'src/form/FormScheduleDaySelect';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';
import { useConfigureMuiTheme } from 'src/utils/mui/useConfigureMuiTheme';

const meta: Meta<typeof FormScheduleDaySelect> = {
    component: FormScheduleDaySelect,
    args: {
        name: 'schedule',
        label: 'Select your schedule',
    },
    argTypes: {
        name: {
            description: 'ScheduleDaySelect name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        label: {
            description: 'ScheduleDaySelect label',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'ScheduleDaySelect default value',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            description: 'Disables ScheduleDaySelect',
            table: {
                type: { summary: 'boolean' },
            },
        },
        daysTranslations: {
            description: 'ScheduleDaySelect time pickers label',
            table: {
                type: { summary: 'Object' },
            },
            control: false,
        },
        required: {
            description: `Sets checkbox as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
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

type Story = StoryObj<typeof FormScheduleDaySelect>;

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
                        <FormScheduleDaySelect name={'schedule'} label={'Select your schedule'} />
                    </ThemeProvider>
                </MuiPickersUtilsProvider>
            </Form>
        );
    },
};
