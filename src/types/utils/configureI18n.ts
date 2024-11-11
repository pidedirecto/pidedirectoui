export type ConfigureI18n = (params: ConfigureI18nParams) => void;

export type ConfigureI18nParams = {
    translations: Translations;
    language: string;
};

export type Translations = {
    en: Record<string, string>;
    es: Record<string, string>;
    sv?: Record<string, string>;
};
