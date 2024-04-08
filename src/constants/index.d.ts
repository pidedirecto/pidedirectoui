import { UiLogEventTypes as UiLogEventTypesValue } from "src/constants/UiLogEventType";
import { ScreenSizes as ScreenSizesValue } from "src/constants/ScreenSize";
import { ImageSizes as ImageSizesValue } from "src/constants/ImageSize";

type UiLogEventType = (typeof UiLogEventTypesValue)[keyof typeof UiLogEventTypesValue];

export const UiLogEventTypes: Record<UiLogEventType, UiLogEventType>

type ScreenSizeType = (typeof ScreenSizesValue)[keyof typeof ScreenSizesValue];

export const ScreenSizes: Record<ScreenSizeType, ScreenSizeType>

type ImageSizeType = (typeof ImageSizesValue)[keyof typeof ImageSizesValue];

export const ImageSizes: Record<ImageSizeType, ImageSizeType>

