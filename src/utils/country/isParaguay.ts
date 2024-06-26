/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isParaguay(country: CountryCode | undefined): boolean {
    return country === CountryCodes.PY;
}
