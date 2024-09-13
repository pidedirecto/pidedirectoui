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
    BO: 'BO',
    CR: 'CR',
    CU: 'CU',
    EC: 'EC',
    SV: 'SV',
    GT: 'GT',
    NI: 'NI',
    PA: 'PA',
    DO: 'DO',
    HN: 'HN',
} as const;

export type CountryCode = (typeof CountryCodes)[keyof typeof CountryCodes];
