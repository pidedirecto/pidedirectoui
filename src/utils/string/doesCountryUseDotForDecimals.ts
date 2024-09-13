import { CountryCode } from 'src/constants/CountryCode';
import { formatAsCountryNumber } from 'src/utils/string/formatAsCountryNumber';

export function doesCountryUseDotForDecimals(country: CountryCode | undefined): boolean {
    const formattedNumber = formatAsCountryNumber('123456.78', { country });
    return formattedNumber.endsWith('.78');
}
