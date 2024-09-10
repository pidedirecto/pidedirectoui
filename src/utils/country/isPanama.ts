/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isPanama(country: CountryCode | undefined): boolean {
    return country === CountryCodes.PA;
}
