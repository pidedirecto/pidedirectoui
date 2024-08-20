/**
 * @prettier
 */
import { CountryCode } from 'src/constants/CountryCode';
import { doesCountryUseDotForDecimals } from 'src/utils/string/doesCountryUseDotForDecimals';
import { formatAsCountryNumber } from 'src/utils/string/formatAsCountryNumber';

let globalOptions: undefined | Options = undefined;

export function transformCurrencyNumberStringOutput(value?: string, options?: Options): string {
    globalOptions = options;
    if (!value) return '';

    let formattedValue = formatAsCountryNumber(normalizeValue(value), { country: options?.country, maximumFractionDigits: options?.maximumFractionDigits });
    formattedValue = addDecimalCharacter(value, formattedValue);
    formattedValue = formatNumberForTrailingZeros(value, formattedValue);

    if (doesCountryUseDotForDecimals(options?.country)) {
        return formattedValue.replace(/,/g, '');
    }
    return formattedValue.replace(/\./g, '').replace(/,/, '.');
}

function normalizeValue(value: string): string {
    return removeIntegerGroups(removeLetters(value));
}

function removeIntegerGroups(value: string): string {
    if (doesCountryUseDotForDecimals(globalOptions?.country)) {
        return value.replace(/,/g, '');
    }

    const [integers, decimals] = value.split(',');
    if (!decimals) {
        const normalizedValue = integers.replace(/\./g, '');
        if (!value.includes(',')) return normalizedValue;
        return normalizedValue + '.';
    }

    return integers.replace(/\./g, '') + '.' + decimals;
}

function removeLetters(value: string): string {
    return value.replace(/[^\d.,]/g, '');
}

function addDecimalCharacter(originalValue: string, formattedValue: string): string {
    const decimalCharacter = doesCountryUseDotForDecimals(globalOptions?.country) ? '.' : ',';

    if (originalValue.includes(decimalCharacter) && !formattedValue.includes(decimalCharacter)) {
        return formattedValue + decimalCharacter;
    }
    return formattedValue;
}

function formatNumberForTrailingZeros(originalValue: string, formattedValue: string): string {
    const countryDecimalCharacter = doesCountryUseDotForDecimals(globalOptions?.country) ? '.' : ',';

    const originalDecimals = originalValue.split(countryDecimalCharacter)[1] ?? '';
    const formattedDecimals = formattedValue.split(countryDecimalCharacter)[1] ?? '';
    const formattedOriginalDecimals = originalDecimals.slice(0, globalOptions?.maximumFractionDigits);

    if (formattedOriginalDecimals === formattedDecimals) {
        return formattedValue;
    }

    const formattedIntegers = formattedValue.split(countryDecimalCharacter)[0];
    return `${formattedIntegers}${countryDecimalCharacter}${formattedOriginalDecimals}`;
}

type Options = {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    country?: CountryCode;
};
