/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Form } from 'src/form/Form';

const meta: Meta<typeof Form> = {
    component: Form,
    args: {
        form: {} as any,
        onSubmit: () => {},
    },
    argTypes: {
        form: {
            description: 'form object returned by the useForm hook',
            type: {
                required: true,
                name: 'object' as any,
            },
            table: {
                type: { summary: 'object' },
            },
        },
        onSubmit: {
            description: 'onSubmit callback',
            type: {
                required: true,
                name: 'function',
            },
            table: {
                type: { summary: 'function' },
            },
        },
        disabled: {
            description: 'Disables form components inside Form',
            table: {
                type: { summary: 'boolean' },
            },
        },
        disableSubmitOnEnterKey: {
            description: 'Disables onSubmit when click on enter key',
            table: {
                type: { summary: 'boolean' },
            },
        },
        classes: {
            description: 'Classes object to override form style',
            table: {
                type: { summary: 'object' },
            },
        },
        //@ts-ignore
        'classes.form': {
            description: 'CSS class to override the HTML form style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
};
