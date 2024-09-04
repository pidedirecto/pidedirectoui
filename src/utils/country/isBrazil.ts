/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isBrazil(country: CountryCode | undefined): boolean {
    return country === CountryCodes.MX;
}
