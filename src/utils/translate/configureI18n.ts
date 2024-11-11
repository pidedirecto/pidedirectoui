import type { LanguageTag } from 'src/types/Id';
import { ConfigureI18nParams, Translations } from 'src/types/utils/configureI18n';

let language = 'es-MX';
export let translations: Translations = {
    en: {},
    es: {},
};

export function configureI18n({ translations: newTranslations, language: newLanguage }: ConfigureI18nParams) {
    translations = newTranslations;
    language = newLanguage;
}

export function setLanguage(value: LanguageTag) {
    language = value;
}

export function getLanguage() {
    return language;
}
