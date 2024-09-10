/**
 * @prettier
 */
import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isEcuador(country: CountryCode | undefined): boolean {
    return country === CountryCodes.EC;
}
