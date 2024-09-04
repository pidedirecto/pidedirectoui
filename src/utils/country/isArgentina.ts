/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isArgentina(country: CountryCode | undefined): boolean {
    return country === CountryCodes.AR;
}
