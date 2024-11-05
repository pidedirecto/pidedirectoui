export function replaceDataInTranslate(text: string, data?: Record<string, string | number | undefined>): string {
    if (!text || !data) {
        return text;
    }
    return Object.entries(data).reduce((result, entry) => {
        const [key, value]: [string, string] = entry as any;
        return result.replace(new RegExp(`@${key}`, 'g'), value || '');
    }, text);
}
