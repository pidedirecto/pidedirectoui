/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isSweden(country: CountryCode | undefined): boolean {
    return country === CountryCodes.SE;
}
