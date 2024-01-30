/**
 * @prettier
 */
export function createLink(url: string, text: string): string {
    return `<a href="${url}" target="_blank">${text}</a>`;
}
