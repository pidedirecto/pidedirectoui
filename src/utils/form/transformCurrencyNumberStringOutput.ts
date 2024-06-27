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

    if (doesCountryUseDotForDecimals(options?.country)) return formattedValue.replace(/,/g, '');
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
    if (!decimals) return integers.replace(/\./g, '');

    return integers.replace(/\./g, '') + '.' + decimals;
}

function removeLetters(value: string): string {
    return value.replace(/[^\d.,]/g, '');
}

function addDecimalCharacter(originalValue: string, formattedValue: string): string {
    if (doesCountryUseDotForDecimals(globalOptions?.country)) {
        if (originalValue.includes('.') && !formattedValue.includes('.')) {
            return formattedValue + '.';
        }
        return formattedValue;
    }

    if (originalValue.includes(',') && !formattedValue.includes(',')) {
        return formattedValue + ',';
    }

    return formattedValue;
}

type Options = {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    country?: CountryCode;
};
