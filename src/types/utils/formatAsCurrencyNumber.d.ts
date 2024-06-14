/**
 * @prettier
 */
import { CountryCode } from 'src/constants/CountryCode';
import { Currency } from 'src/constants/Currency';

export type FormatAsCurrencyNumber = (value: string | number | null | undefined, options?: Options) => string;

export type Options = {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    country?: CountryCode;
    currency?: Currency;
};
