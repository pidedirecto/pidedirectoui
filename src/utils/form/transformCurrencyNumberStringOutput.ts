/**
 * @prettier
 */

export function transformCurrencyNumberStringOutput(value?: string, options?: Options): string {
    const formatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: options?.maximumDigits ?? 2 });

    if (!value) return '';
    const normalizedValue = normalizeValue(value);

    let formattedValue = formatter.format(normalizedValue as any);
    if (value.includes('.') && !formattedValue.includes('.')) formattedValue += '.';
    console.log('formattedValue = ', formattedValue);

    return formattedValue.replace(/,/g, '');
}

function normalizeValue(value: string): string {
    let normalizedValue = removeLetters(value);
    normalizedValue = removeMultipleDots(normalizedValue);
    return normalizedValue;
}

function removeMultipleDots(value: string): string {
    const hasSingleDot = value.match(/^-?\d+(?:\.\d+)?$/);
    if (hasSingleDot) return value;

    return value.slice(0, value.length - 1);
}

function removeLetters(value: string): string {
    return value.replace(/[^\d.]/g, '');
}

type Options = {
    maximumDigits?: number;
};
