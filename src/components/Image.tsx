import * as React from 'react';
import { ImageSizes } from 'src/constants/ImageSize';
import { ImageProps } from 'src/types/components/Image';
import { isExternalImageUrl } from 'src/utils/image/isExternalImageUrl';

export function Image({ src, width, height, size, fitIn, ...props }: ImageProps): React.ReactElement {
    const getWidth = () => {
        if (width) return Number(width);
        if (height) return Number(height);
        if (size) return getImageSize();
    };

    const getHeight = () => {
        if (height) return Number(height);
        if (width) return Number(width);
        if (size) return getImageSize();
    };

    const getSrc = () => {
        if (isExternalImageUrl(src)) return src;

        const width = getWidth();
        const height = getHeight();

        if (!width || !height) {
            return console.error('You are using Image component without passing any sizing prop, either pass width, height or size');
        }

        return formatSrc(width, height);
    };

    const getImageSize = () => {
        switch (size) {
            case ImageSizes.EXTRA_SMALL:
                return 40;
            case ImageSizes.SMALL:
                return 80;
            case ImageSizes.MEDIUM:
                return 120;
            case ImageSizes.LARGE:
                return 160;
            case ImageSizes.EXTRA_LARGE:
                return 200;
            default:
                console.error('You are passing an unknown value to size prop in Image component, please pass one of the follow one https://ui.pidedirecto.mx/?path=/docs/constants-imagesizes--docs');
        }
    };

    const formatSrc = (width: number, height: number) => {
        const srcBlocks = src.split('/');
        return srcBlocks.slice(0, srcBlocks.length - 1).join('/') + `${fitIn ? '/fit-in' : ''}/filters:no_upscale()/${width}x${height}/` + srcBlocks[srcBlocks.length - 1];
    };

    return <img {...props} width={getWidth()} height={getHeight()} src={getSrc()} />;
}
