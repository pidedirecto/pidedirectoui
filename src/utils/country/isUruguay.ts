/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isUruguay(country: CountryCode | undefined): boolean {
    return country === CountryCodes.UY;
}
