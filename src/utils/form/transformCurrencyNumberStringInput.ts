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

    let formattedValue = formatAsCountryNumber(normalizeValue(value), { country: options?.country, maximumFractionDigits: options?.maximumFractionDigits });

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

type Options = {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    country?: CountryCode;
};
