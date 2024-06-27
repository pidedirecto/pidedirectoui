/**
 * @prettier
 */

export const CountryCodes = {
    MX: 'MX',
    SE: 'SE',
    US: 'US',
    UY: 'UY',
    AR: 'AR',
    BR: 'BR',
    PE: 'PE',
    CL: 'CL',
    PY: 'PY',
    CO: 'CO',
} as const;

export type CountryCode = (typeof CountryCodes)[keyof typeof CountryCodes];
