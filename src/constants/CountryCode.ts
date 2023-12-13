/**
 * @prettier
 */

export const CountryCodes = Object.freeze({
    MX: 'MX',
    SE: 'SE',
    US: 'US',
    UY: 'UY',
    AR: 'AR',
    BR: 'BR',
    PE: 'PE',
    CL: 'CL',
    PY: 'PY',
});

export type CountryCode = (typeof CountryCodes)[keyof typeof CountryCodes];
