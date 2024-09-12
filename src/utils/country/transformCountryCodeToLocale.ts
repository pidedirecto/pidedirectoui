import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function transformCountryCodeToLocale(countryCode: CountryCode | undefined): string {
    switch (countryCode) {
        case CountryCodes.MX:
            return 'es-MX';
        case CountryCodes.SE:
            return 'sv-SE';
        case CountryCodes.US:
            return 'en-US';
        case CountryCodes.UY:
            return 'es-UY';
        case CountryCodes.AR:
            return 'es-AR';
        case CountryCodes.BR:
            return 'pt-BR';
        case CountryCodes.PE:
            return 'es-PE';
        case CountryCodes.CL:
            return 'es-CL';
        case CountryCodes.PY:
            return 'es-PY';
        case CountryCodes.CO:
            return 'es-CO';
        default:
            return 'es-MX';
    }
}
