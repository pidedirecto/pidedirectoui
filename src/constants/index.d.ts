import { UiLogEventTypes as UiLogEventTypesValue } from "src/constants/UiLogEventType";

export type UiLogEventType = (typeof UiLogEventTypesValue)[keyof typeof UiLogEventTypesValue];

export const UiLogEventTypes: Record<UiLogEventType, UiLogEventType>
