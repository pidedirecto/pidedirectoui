/**
 * @prettier
 */

export function transformPercentNumberInput(value: number | null): string {
    if (!value) return '';
    if (isNaN(value)) return '';

    const input = value * 100;
    return input.toString();
}
