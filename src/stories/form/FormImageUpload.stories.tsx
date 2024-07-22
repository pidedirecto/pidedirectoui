/**
 * @prettier
 */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from 'src/form/Form';
import { FormImageUpload } from 'src/form/FormImageUpload';
import { useForm } from 'src/hooks/useForm';
import { createLink } from 'src/utils/docs/createLink';

const meta: Meta<typeof FormImageUpload> = {
    component: FormImageUpload,
    args: {
        name: 'email',
        label: 'Email',
    },
    argTypes: {
        name: {
            description: 'Image uploader input name',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        transformer: {
            description: 'Image uploader transformer function, this will receive all raw image data and should return an url string',
            type: {
                required: true,
                name: 'function',
            },
            table: {
                type: { summary: 'function' },
            },
        },
        dimensions: {
            description: 'Image uploader image dimensions validation',
            table: {
                type: { summary: 'object' },
            },
        },
        onDimensionsError: {
            description: 'Image uploader image on dimensions error callback',
            table: {
                type: { summary: 'function' },
            },
        },
        label: {
            description: 'Image uploader label',
            table: {
                type: { summary: 'string' },
            },
        },
        tooltip: {
            description: 'Image uploader tooltip',
            table: {
                type: { summary: 'string' },
            },
        },
        helperText: {
            description: 'Image uploader helper text',
            table: {
                type: { summary: 'string' },
            },
        },
        defaultValue: {
            description: 'Image uploader default value',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            description: 'Disables image uploader',
            table: {
                type: { summary: 'boolean' },
            },
        },
        required: {
            description: `Sets input as required, can be boolean or ${createLink('https://react-hook-form.com/docs/useform/register#options', 'rule object')}`,
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
        classes: {
            description: 'Classes object to override image upload style',
            table: {
                type: { summary: 'object' },
            },
        },
        // @ts-ignore
        'classes.container': {
            description: 'CSS class to override the container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.inputContainer': {
            description: 'CSS class to override the input container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
        'classes.imageContainer': {
            description: 'CSS class to override the image container style',
            table: {
                subcategory: 'Classes API',
                type: { summary: 'string' },
            },
            control: false,
        },
    },
};
export default meta;

type Story = StoryObj<typeof FormImageUpload>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const form = useForm();

        return (
            <Form form={form} onSubmit={() => {}}>
                <FormImageUpload name={'imageUrl'} label={'Image'} transformer={() => 'https://images.letseat.mx/4216ff96827304547af5a000cdd61d16.jpg'}>
                    <span>Upload your image here</span>
                </FormImageUpload>
            </Form>
        );
    },
};
