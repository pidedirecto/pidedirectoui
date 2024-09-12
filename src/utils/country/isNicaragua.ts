import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isNicaragua(country: CountryCode | undefined): boolean {
    return country === CountryCodes.NI;
}
