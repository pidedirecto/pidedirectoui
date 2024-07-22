/**
 * @prettoer
 */
import * as React from 'react'

export type ImageUploadProps = {
    children: React.ReactNode;
    label?: string;
    helperText?: string;
    tooltip?: string;
    disabled?: boolean;
    error?: boolean;
    name?: string;
    value: string | undefined | null;
    onChange: (value: string | undefined) => void | Promise<void>;
    transformer: (params: Params) => Promise<string> | string;
    dimensions?: {
        maxWidth?: number;
        minWidth?: number;
        maxHeight?: number;
        minHeight?: number;
    };
    onDimensionsError?: () => void;
    classes?: {
        container?: string;
        inputContainer?: string;
        imageContainer?: string;
    }
}

export const ImageUpload = React.FunctionComponent<ImageUploadProps>

type Params = {
    fileName: string;
    imageBlob: Blob;
    type: string;
}
