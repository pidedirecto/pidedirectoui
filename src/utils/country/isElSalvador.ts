/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isElSalvador(country: CountryCode | undefined): boolean {
    return country === CountryCodes.SV;
}
