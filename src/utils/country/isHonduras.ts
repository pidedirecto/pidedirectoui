/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isHonduras(country: CountryCode | undefined): boolean {
    return country === CountryCodes.HN;
}
