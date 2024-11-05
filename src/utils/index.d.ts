import { FormatAsCurrencyNumber } from "src/types/utils/formatAsCurrencyNumber";
import { FormatAsCountryNumber } from "src/types/utils/formatAsCountryNumber";
import { Translate } from "src/types/utils/translate";
import { ConfigureI18n } from "src/types/utils/configureI18n";
import { TranslateObject } from "src/types/utils/translateObject";
import { SetLanguage } from "src/types/utils/setLanguage";

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
export const formatAsCountryNumber: FormatAsCountryNumber

/**
 * Translate function
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/utils-translate--docs)
 */
export const translate: Translate

/**
 * Configure translations function
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/utils-translate--docs)
 */
export const configureI18n: ConfigureI18n

/**
 * Translate object function
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/utils-translate--docs#translateobject)
 */
export const translateObject: TranslateObject

/**
 * Translate object function
 *
 * [docs](https://ui.pidedirecto.mx/?path=/docs/utils-translate--docs#setlanguage)
 */
export const setLanguage: SetLanguage
