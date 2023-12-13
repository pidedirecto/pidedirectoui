/**
 * @prettier
 */
import { I18n } from 'aws-amplify';

export function translate<T extends string | null | undefined>(text: T, data?: { [key: string]: string | number | undefined }): string {
    if (!text) {
        return '';
    }
    const translation = I18n.get(text);
    return replaceData(translation, data);
}

function replaceData(translation: string, data?: { [key: string]: string | number | undefined }): string {
    if (!data) {
        return translation;
    }
    return Object.entries(data).reduce((result, entry) => {
        const [key, value]: [string, string] = entry as any;
        return result.replace(new RegExp(`@${key}\\b`, 'g'), value ?? '');
    }, translation);
}
