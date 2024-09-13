import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function getCountryCurrencySymbol(country: CountryCode): string {
    switch (country) {
        case CountryCodes.SE:
            return 'kr';
        case CountryCodes.UY:
            return '$U';
        case CountryCodes.BR:
            return 'R$';
        case CountryCodes.PE:
            return 'S/';
        case CountryCodes.PY:
            return '₲';
        case CountryCodes.BO:
            return 'Bs';
        case CountryCodes.CR:
            return '₡';
        case CountryCodes.CU:
            return '₱';
        case CountryCodes.GT:
            return 'Q';
        case CountryCodes.NI:
            return 'C$';
        case CountryCodes.PA:
            return 'B/.';
        case CountryCodes.DO:
            return 'RD$';
        case CountryCodes.HN:
            return 'L';
        default:
            return '$';
    }
}
