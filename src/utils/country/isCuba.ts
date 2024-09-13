import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isCuba(country: CountryCode | undefined): boolean {
    return country === CountryCodes.CU;
}
