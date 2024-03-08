import { UiLogEventTypes as UiLogEventTypesValue } from "src/constants/UiLogEventType";
import { ScreenSizes as ScreenSizesValue } from "src/constants/ScreenSize";

export type UiLogEventType = (typeof UiLogEventTypesValue)[keyof typeof UiLogEventTypesValue];

export const UiLogEventTypes: Record<UiLogEventType, UiLogEventType>

export type ScreenSizeType = (typeof ScreenSizesValue)[keyof typeof ScreenSizesValue];

export const ScreenSizes: Record<ScreenSizeType, ScreenSizeType>
