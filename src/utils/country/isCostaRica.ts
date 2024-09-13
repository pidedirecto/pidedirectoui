import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isCostaRica(country: CountryCode | undefined): boolean {
    return country === CountryCodes.CR;
}
