export function transformIntegerOutput(value?: string): number | null {
    if (!value) return null;
    if (isNaN(Number(value))) return null;
    return Number(value.replace(/\D/g, ''));
}
