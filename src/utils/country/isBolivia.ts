import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isBolivia(country: CountryCode | undefined): boolean {
    return country === CountryCodes.BO;
}
