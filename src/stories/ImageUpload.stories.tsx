import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ImageUpload } from 'src/components/ImageUpload';

const meta: Meta<typeof ImageUpload> = {
    component: ImageUpload,
    args: {
        label: 'Upload an image',
    },
    argTypes: {
        value: {
            description: 'Image uploader value',
            type: {
                required: true,
                name: 'string',
            },
            table: {
                type: { summary: 'string' },
            },
        },
        onChange: {
            description: 'Image uploader on change function',
            type: {
                required: true,
                name: 'function',
            },
            table: {
                type: { summary: 'function' },
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
        disabled: {
            description: 'Disables image uploader',
            table: {
                type: { summary: 'boolean' },
            },
        },
        error: {
            description: 'Image uploader error state',
            table: {
                type: { summary: 'boolean' },
            },
        },
        name: {
            description: 'Image uploader input name',
            table: {
                type: { summary: 'string' },
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

type Story = StoryObj<typeof ImageUpload>;

export const Primary: Story = {
    args: {
        ...meta.args,
    },
    render: () => {
        const [value, setValue] = useState<undefined | string>(undefined);

        return (
            <ImageUpload label='Upload an image' value={value} onChange={(value) => setValue(value)} transformer={() => 'https://images.letseat.mx/4216ff96827304547af5a000cdd61d16.jpg'}>
                <span>Upload or drop your images here</span>
            </ImageUpload>
        );
    },
};
