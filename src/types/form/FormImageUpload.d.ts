import * as React from 'react';
import { type ValidationRule } from 'react-hook-form';
import { ImageUploadProps } from 'src/types/components/ImageUpload';

export type FormImageUploadProps = {
    children: React.ReactNode;
    label?: string;
    defaultValue?: string;
    tooltip?: string;
    helperText?: string;
    disabled?: boolean;
    required?: ValidationRule<boolean>;
    rules?: Record<string, ValidationRule<any>>;
    name: string;
    transformer: ImageUploadProps['transformer'];
    dimensions?: ImageUploadProps['dimensions'];
    onDimensionsError?: ImageUploadProps['onDimensionsError'];
    classes?: ImageUploadProps['classes'];
};

export type FormImageUpload = React.FunctionComponent<FormImageUploadProps>;
