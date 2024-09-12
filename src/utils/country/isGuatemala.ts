import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isGuatemala(country: CountryCode | undefined): boolean {
    return country === CountryCodes.GT;
}
