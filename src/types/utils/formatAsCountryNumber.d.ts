
import { CountryCode } from 'src/constants/CountryCode';

export type FormatAsCountryNumber = (value: string | number | null | undefined, options?: Options) => string;

export type Options = {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    country?: CountryCode;
};
