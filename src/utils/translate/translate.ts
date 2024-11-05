import { getLanguage, translations } from 'src/utils/translate/configureI18n';
import { replaceDataInTranslate } from 'src/utils/translate/replaceDataInTranslate';

export function translate<T extends string | undefined | null>(text: T, data?: Record<string, string | number | undefined>): string {
    if (!text) return '';
    const language = getLanguage();
    if (language.startsWith('es')) {
        return replaceDataInTranslate(translations.es[text] ?? text, data);
    }
    return replaceDataInTranslate(translations.en[text] ?? text, data);
}
