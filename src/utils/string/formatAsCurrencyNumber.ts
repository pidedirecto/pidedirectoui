import { CountryCode, CountryCodes } from 'src/constants/CountryCode';
import { Currencies, Currency } from 'src/constants/Currency';
import { Options } from 'src/types/utils/formatAsCurrencyNumber';
import { doesCurrencyBelongsToCountry } from 'src/utils/country/doesCurrencyBelongsToCountry';
import { getCountryCurrencySymbol } from 'src/utils/country/getCountryCurrencySymbol';
import { isParaguay } from 'src/utils/country/isParaguay';
import { isPeru } from 'src/utils/country/isPeru';
import { transformCountryCodeToCurrency } from 'src/utils/country/transformCountryCodeToCurrency';
import { transformCountryCodeToLocale } from 'src/utils/country/transformCountryCodeToLocale';
import { isString } from 'src/utils/string/isString';

export function formatAsCurrencyNumber(value: string | number | null | undefined, options?: Options): string {
    if (!!options?.maximumFractionDigits && !!options?.minimumFractionDigits && options?.maximumFractionDigits < options?.minimumFractionDigits) {
        console.error(`maximumFractionDigits can not be lower than minimumFractionDigits in formatAsCurrencyNumber util`);
        return '';
    }

    if (value === undefined || value === null) {
        return '';
    }

    if (isString(value) && isNaN(Number(value))) {
        return '';
    }

    const numberFormat = Intl.NumberFormat(transformCountryCodeToLocale(options?.country), {
        style: 'currency',
        currency: options?.currency ?? transformCountryCodeToCurrency(options?.country),
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
        case 'currency':
            const currency = numberPart.value as Currency;

            const isForeignCurrency = Object.keys(Currencies).includes(currency);
            if (isForeignCurrency) {
                if (doesCurrencyBelongsToCountry(currency as Currency, country)) return getCountryCurrencySymbol(country);
                return `${currency}$`;
            }

            if (isParaguay(country)) return '₲';
            return currency;
        default:
            return numberPart.value;
    }
}

type NumberPart = {
    type: string;
    value: string;
};
