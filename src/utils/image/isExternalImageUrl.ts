export function isExternalImageUrl(imageUrl: string): boolean {
    if (!imageUrl) {
        return false;
    }
    return !imageUrl.startsWith('https://images.letseat.mx');
}
