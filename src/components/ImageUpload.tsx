/**
 * @prettier
 */
import * as React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Button } from 'src/components/Button';
import { HelperText } from 'src/components/HelperText';
import { Image } from 'src/components/Image';
import { Label } from 'src/components/Label';
import { LinearProgress } from 'src/components/LinearProgress';
import { Text } from 'src/components/Text';
import { Tooltip } from 'src/components/Tooltip';
import { ImageSizes } from 'src/constants/ImageSize';
import { CrossIcon } from 'src/icons/CrossIcon';
import { useReadFiles } from 'src/services/file/useReadFiles';
import classes from 'src/styles/imageUpload.module.css';
import { ImageUploadProps } from 'src/types/components/ImageUpload';
import { hashMd5FromArrayBuffer } from 'src/utils/crypto/hashMd5FromArrayBuffer';
import { classNames } from 'src/utils/css/classNames';
import { imageHasTheRightDimensions } from 'src/utils/image/imageHasTheRightDimensions';
import { isExternalImageUrl } from 'src/utils/image/isExternalImageUrl';

export function ImageUpload({
    children,
    label,
    tooltip,
    helperText,
    disabled,
    error,
    name,
    value,
    onChange,
    transformer,
    onDimensionsError,
    dimensions,
    classes: classesProp,
}: ImageUploadProps): React.ReactElement {
    const readFiles = useReadFiles();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [loading, setLoading] = useState(false);

    const openFileExplorer = () => {
        inputRef.current?.click();
    };

    const selectImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        if (!files) return;

        await processFiles(files);
    };

    const processFiles = async (files: FileList) => {
        setLoading(true);
        const result = await readFiles(files);
        const imagesFitDimensions = await doesImagesFitTheDimensions(result);
        if (!imagesFitDimensions) {
            setLoading(false);
            onDimensionsError?.();
            return;
        }
        const imageUrl = await formatImage(result);
        onChange(imageUrl);
        setLoading(false);
    };

    const doesImagesFitTheDimensions = async (dataFiles: Array<DataFile>) => {
        if (!dimensions) return true;

        for (const dataFile of dataFiles) {
            const doesImageFitDimensions = await imageHasTheRightDimensions({
                buffer: dataFile.data,
                imageType: dataFile.file.type,
                dimensions: {
                    maxWidth: dimensions?.maxWidth ?? Infinity,
                    minWidth: dimensions?.maxWidth ?? 0,
                    maxHeight: dimensions?.maxHeight ?? Infinity,
                    minHeight: dimensions?.minHeight ?? 0,
                },
            });
            if (!doesImageFitDimensions) return false;
        }

        return true;
    };

    const formatImage = async (dataFiles: Array<DataFile>) => {
        const dataFile = dataFiles[0];
        const fileName = `${hashMd5FromArrayBuffer(dataFile.data)}-${dataFile.file.name}`;
        const imageUrl = await transformer({
            fileName,
            imageBlob: new Blob([dataFile.data as any], { type: dataFile.file.type }),
            type: dataFile.file.type,
        });
        return imageUrl;
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const dropHandler = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (disabled) return;

        if (!e.dataTransfer || !e.dataTransfer.files) {
            return;
        }
        await processFiles(e.dataTransfer.files);
        return false;
    };

    if (value && !isExternalImageUrl(value)) {
        return (
            <div className={classNames(classes.container, classesProp?.container)}>
                <div className={classes.labelsContainer}>
                    <div className={classes.labelContainer}>
                        <Label error={error}>{label}</Label>
                        {!!tooltip && <Tooltip text={tooltip} />}
                    </div>
                    {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
                </div>
                <div className={classNames(classes.imageContainer, classesProp?.imageContainer)} onClick={openFileExplorer}>
                    <Image src={value} size={ImageSizes.SMALL} className={classes.image} />
                    <Text>{value}</Text>
                    <Button variant='icon' onClick={() => onChange(undefined)} disabled={disabled}>
                        <CrossIcon size={16} />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(classes.container, classesProp?.container)}>
            <div className={classes.labelsContainer}>
                <div className={classes.labelContainer}>
                    <Label htmlFor={`${name}-imageUpload`} error={error}>
                        {label}
                    </Label>
                    {!!tooltip && <Tooltip text={tooltip} />}
                </div>
                {!!helperText && <HelperText error={error}>{helperText}</HelperText>}
            </div>
            <div
                data-disabled={!!disabled}
                data-error={!!error}
                className={classNames(classes.inputContainer, classesProp?.inputContainer)}
                onClick={openFileExplorer}
                onDragOver={dragHandler}
                onDrop={dropHandler}
            >
                <input style={{ display: 'none' }} ref={inputRef} type='file' accept='image/*' onChange={selectImages} hidden id={`${name}-imageUpload`} disabled={disabled} />
                {children}
                {loading && <LinearProgress />}
            </div>
        </div>
    );
}

type DataFile = {
    data: ArrayBuffer;
    file: File;
};
