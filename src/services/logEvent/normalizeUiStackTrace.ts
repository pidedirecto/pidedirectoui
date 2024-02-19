/**
 * @prettier
 */

export function normalizeUiStackTrace(text: string): string {
    return text.toLowerCase().replace(/ /g, '_');
}
