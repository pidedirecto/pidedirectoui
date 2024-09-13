export function transformPercentNumberOutput(value: string): number | null {
    if (value === '') return null;
    if (isNaN(Number(value))) return null;

    const output = Number(value) / 100;
    return Number(output);
}
