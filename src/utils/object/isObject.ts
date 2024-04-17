/**
 * @prettier
 */

export function isObject(obj: any): boolean {
    return obj?.constructor?.name === 'Object';
}
