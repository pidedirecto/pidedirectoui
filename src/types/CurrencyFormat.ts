/**
 * @prettier
 */
import type { Currency } from 'src/constants/Currency';

export type CurrencyFormat = {
    locale: string;
    currency: Currency;
    fractionDigits: number;
};
