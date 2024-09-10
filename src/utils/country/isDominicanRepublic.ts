/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isDominicanRepublic(country: CountryCode | undefined): boolean {
    return country === CountryCodes.DO;
}
