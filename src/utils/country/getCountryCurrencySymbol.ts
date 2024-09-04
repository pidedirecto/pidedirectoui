/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function getCountryCurrencySymbol(country: CountryCode): string {
    switch (country) {
        case CountryCodes.PY:
            return '₲';
        case CountryCodes.PE:
            return 'S/';
        case CountryCodes.BR:
            return 'R$';
        default:
            return '$';
    }
}
