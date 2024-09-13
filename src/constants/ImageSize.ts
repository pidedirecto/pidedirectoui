export const ImageSizes = Object.freeze({
    EXTRA_SMALL: 'EXTRA_SMALL',
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',
    EXTRA_LARGE: 'EXTRA_LARGE',
});

export type ImageSize = (typeof ImageSizes)[keyof typeof ImageSizes];
