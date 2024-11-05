import { getLanguage } from 'src/utils/translate/configureI18n';
import { replaceDataInTranslate } from 'src/utils/translate/replaceDataInTranslate';

export function translateObject<T extends string | undefined | null>(translations: Translations, text: T, data?: Record<string, string | number | undefined>): string {
    if (!text) return '';
    const language = getLanguage();
    if (language.startsWith('es')) {
        return replaceDataInTranslate(translations.es ?? text, data);
    }
    return replaceDataInTranslate(translations.en ?? text, data);
}

type Translations = {
    en?: string;
    es?: string;
    sv?: string;
};
