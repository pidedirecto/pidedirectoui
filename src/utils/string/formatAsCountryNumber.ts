/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';
import { Options } from 'src/types/utils/formatAsCountryNumber';
import { isPeru } from 'src/utils/country/isPeru';
import { transformCountryCodeToLocale } from 'src/utils/country/transformCountryCodeToLocale';
import { isString } from 'src/utils/string/isString';

export function formatAsCountryNumber(value: string | number | null | undefined, options?: Options): string {
    if (!!options?.maximumFractionDigits && !!options?.minimumFractionDigits && options?.maximumFractionDigits < options?.minimumFractionDigits) {
        console.error(`maximumFractionDigits can not be lower than minimumFractionDigits in formatAsCountryNumber util`);
        return '';
    }

    if (value === undefined || value === null) {
        return '';
    }

    if (isString(value) && isNaN(Number(value))) {
        return '';
    }

    const numberFormat = Intl.NumberFormat(transformCountryCodeToLocale(options?.country), {
        style: 'decimal',
        minimumFractionDigits: options?.minimumFractionDigits ?? 0,
        maximumFractionDigits: options?.maximumFractionDigits ?? options?.minimumFractionDigits ?? 2,
    });

    const numberParts = numberFormat.formatToParts(Number(value));
    const formattedString = numberParts.map((part) => formatNumberPart(part, options?.country ?? CountryCodes.MX)).join('');

    return formattedString.replace(/\s/g, '');
}

function formatNumberPart(numberPart: NumberPart, country: CountryCode): string {
    switch (numberPart.type) {
        case 'group':
            if (isPeru(country)) return '.';
            return numberPart.value;
        case 'decimal':
            if (isPeru(country)) return ',';
            return numberPart.value;
        default:
            return numberPart.value;
    }
}

type NumberPart = {
    type: string;
    value: string;
};
