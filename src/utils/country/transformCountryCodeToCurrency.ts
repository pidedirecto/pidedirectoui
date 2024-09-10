/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function transformCountryCodeToCurrency(countryCode: CountryCode | undefined): string {
    switch (countryCode) {
        case CountryCodes.MX:
            return 'MXN';
        case CountryCodes.SE:
            return 'SEK';
        case CountryCodes.US:
            return 'USD';
        case CountryCodes.UY:
            return 'UYU';
        case CountryCodes.AR:
            return 'ARS';
        case CountryCodes.BR:
            return 'BRL';
        case CountryCodes.PE:
            return 'PEN';
        case CountryCodes.CL:
            return 'CLP';
        case CountryCodes.PY:
            return 'PYG';
        case CountryCodes.CO:
            return 'COP';
        case CountryCodes.BO:
            return 'BOB';
        case CountryCodes.CR:
            return 'CRC';
        case CountryCodes.CU:
            return 'CUP';
        case CountryCodes.EC:
            return 'USD';
        case CountryCodes.SV:
            return 'USD';
        case CountryCodes.GT:
            return 'GTQ';
        case CountryCodes.NI:
            return 'NIO';
        case CountryCodes.PA:
            return 'PAB';
        case CountryCodes.DO:
            return 'DOP';
        case CountryCodes.HN:
            return 'HNL';
        default:
            return 'MXN';
    }
}
