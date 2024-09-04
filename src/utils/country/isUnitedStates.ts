/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isUnitedStates(country: CountryCode | undefined): boolean {
    return country === CountryCodes.US;
}
