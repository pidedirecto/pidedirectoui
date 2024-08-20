/**
 * @prettier
 */
import { CountryCode } from 'src/constants/CountryCode';
import { doesCountryUseDotForDecimals } from 'src/utils/string/doesCountryUseDotForDecimals';
import { formatAsCountryNumber } from 'src/utils/string/formatAsCountryNumber';

let globalOptions: undefined | Options = undefined;

export function transformCurrencyNumberStringInput(value?: string, options?: Options): string {
    globalOptions = options;
    if (!value) return '';

    const normalizedValue = normalizeValue(value);
    let formattedValue = formatAsCountryNumber(normalizedValue, { country: options?.country, maximumFractionDigits: options?.maximumFractionDigits });
    formattedValue = formatNumberForTrailingZeros(normalizedValue, formattedValue);

    return addDecimalCharacter(value, formattedValue);
}

function normalizeValue(value: string): string {
    return removeIntegerGroups(removeLetters(value));
}

function removeIntegerGroups(value: string): string {
    return value.replace(/,/g, '');
}

function removeLetters(value: string): string {
    return value.replace(/[^\d.,]/g, '');
}

function addDecimalCharacter(originalValue: string, formattedValue: string): string {
    const countryDecimalCharacter = doesCountryUseDotForDecimals(globalOptions?.country) ? '.' : ',';
    if (originalValue.includes('.') && !formattedValue.includes(countryDecimalCharacter)) {
        return formattedValue + countryDecimalCharacter;
    }
    return formattedValue;
}

function formatNumberForTrailingZeros(originalValue: string, formattedValue: string): string {
    const countryDecimalCharacter = doesCountryUseDotForDecimals(globalOptions?.country) ? '.' : ',';

    const originalDecimals = originalValue.split('.')[1];
    const formattedDecimals = formattedValue.split(countryDecimalCharacter)[1];
    if (originalDecimals === formattedDecimals) return formattedValue;

    const formattedIntegers = formattedValue.split(countryDecimalCharacter)[0];

    return `${formattedIntegers}${countryDecimalCharacter}${originalDecimals}`;
}

type Options = {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    country?: CountryCode;
};
