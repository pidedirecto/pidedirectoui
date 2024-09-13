import { CountryCode, CountryCodes } from 'src/constants/CountryCode';

export function isPeru(country: CountryCode | undefined): boolean {
    return country === CountryCodes.PE;
}
