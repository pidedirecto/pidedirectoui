import * as React from 'react';
import { HTMLProps } from 'react';
import { ImageSize } from 'src/constants/ImageSize';

export type ImageProps = Omit<HTMLProps<HTMLImageElement>, 'src', 'size'> & {
    src: string;
    size: ImageSize;
    fitIn?: boolean;
};

export type Image = React.FunctionComponent<ImageProps>;
