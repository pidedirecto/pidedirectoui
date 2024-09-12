import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isColombia(country: CountryCode | undefined): boolean {
    return country === CountryCodes.MX;
}
