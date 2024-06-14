/**
 * @prettier
 */
import type { CurrencyCode } from 'src/types/Id';

export const Currencies = {
    MXN: 'MXN' as any as CurrencyCode,
    SEK: 'SEK' as any as CurrencyCode,
    USD: 'USD' as any as CurrencyCode,
    UYU: 'UYU' as any as CurrencyCode,
    ARS: 'ARS' as any as CurrencyCode,
    BRL: 'BRL' as any as CurrencyCode,
    PEN: 'PEN' as any as CurrencyCode,
    CLP: 'CLP' as any as CurrencyCode,
    PYG: 'PYG' as any as CurrencyCode,
} as const;

export type Currency = (typeof Currencies)[keyof typeof Currencies];
