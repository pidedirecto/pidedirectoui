/**
 * @prettier
 */

export async function imageHasTheRightDimensions({ buffer, imageType, dimensions }: Props): Promise<boolean> {
    if (!dimensions) {
        return true;
    }

    const image = new Image();
    image.src = `data:${imageType};base64,${Buffer.from((buffer as any) ?? []).toString('base64')}`;

    return new Promise((resolve: (result: Promise<boolean> | boolean) => void, reject: (error?: any) => void) => {
        image.onload = function () {
            const height = (this as any).height;
            const width = (this as any).width;
            if (width < dimensions.minWidth || width > dimensions.maxWidth || height < dimensions.minHeight || height > dimensions.maxHeight) {
                resolve(false);
                return;
            }
            resolve(true);
        };
    });
}

type Props = {
    buffer: ArrayBuffer | string | null;
    imageType: string;
    dimensions?: {
        minWidth: number;
        maxWidth: number;
        minHeight: number;
        maxHeight: number;
    };
};
