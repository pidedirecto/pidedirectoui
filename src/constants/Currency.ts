/**
 * @prettier
 */
import type { CurrencyCode } from 'src/types/Id';

export const Currencies = Object.freeze({
    MXN: 'MXN' as CurrencyCode,
    SEK: 'SEK' as CurrencyCode,
    USD: 'USD' as CurrencyCode,
    UYU: 'UYU' as CurrencyCode,
    ARS: 'ARS' as CurrencyCode,
    BRL: 'BRL' as CurrencyCode,
    PEN: 'PEN' as CurrencyCode,
    CLP: 'CLP' as CurrencyCode,
    PYG: 'PYG' as CurrencyCode,
});

export type Currency = (typeof Currencies)[keyof typeof Currencies];
