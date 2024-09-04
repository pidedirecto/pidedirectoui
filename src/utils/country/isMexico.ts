/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isMexico(country: CountryCode | undefined): boolean {
    return country === CountryCodes.MX;
}
