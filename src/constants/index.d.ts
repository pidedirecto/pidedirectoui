import { UiLogEventTypes as UiLogEventTypesValue } from "src/constants/UiLogEventType";
import { ScreenSizes as ScreenSizesValue } from "src/constants/ScreenSize";
import { ImageSizes as ImageSizesValue } from "src/constants/ImageSize";
import { CountryCodes as CountryCodesValue } from "src/constants/CountryCode";
import { Currencies as CurrenciesValue } from "src/constants/Currency";

type UiLogEventType = (typeof UiLogEventTypesValue)[keyof typeof UiLogEventTypesValue];

export const UiLogEventTypes: Record<UiLogEventType, UiLogEventType>

type ScreenSizeType = (typeof ScreenSizesValue)[keyof typeof ScreenSizesValue];

export const ScreenSizes: Record<ScreenSizeType, ScreenSizeType>

type ImageSizeType = (typeof ImageSizesValue)[keyof typeof ImageSizesValue];

export const ImageSizes: Record<ImageSizeType, ImageSizeType>

type CountryCodeType = (typeof CountryCodesValue)[keyof typeof CountryCodesValue];

export const CountryCodes: Record<CountryCodeType, CountryCodeType>

type CurrencyType = (typeof CurrenciesValue)[keyof typeof CurrenciesValue];

export const Currencies: Record<CurrencyType, CurrencyType>

