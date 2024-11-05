export type TranslateObject = <T extends string | undefined | null>(translations: Translations, value: T, data?: Record<string, string | number | undefined>) => string;

export type Translations = {
    en?: string;
    es?: string;
    sv?: string;
};
