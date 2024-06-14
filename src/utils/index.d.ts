import { FormatAsCurrencyNumber } from "src/types/utils/formatAsCurrencyNumber";
import { FormatAsCountryNumber } from "src/types/utils/formatAsCountryNumber";

/**
 * Logs store values
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/utils-logstore--docs)
 */
export function logStore(...args: Array<any>): void

/**
 * Format numbers as currency
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/utils-formatascurrencynumber--docs)
 */
export const formatAsCurrencyNumber: FormatAsCurrencyNumber

/**
 * Format numbers as country number
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/utils-formatasnumber--docs)
 */
export const formatAsNumber: FormatAsCountryNumber
