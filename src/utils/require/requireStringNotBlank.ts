/**
 * @prettier
 */
import { isString } from 'src/utils/string/isString';

export function requireStringNotBlank(value?: string | null): string {
    if (value === undefined) {
        throw new Error(`Required value is undefined when it should be a non blank string`);
    }
    if (value === null) {
        throw new Error(`Required value is null when it should be a non blank string`);
    }
    if (!isString(value)) {
        throw new Error(`Required value is "${value}" when it should be a non blank string`);
    }
    if (value.trim().length === 0) {
        throw new Error(`Required value is "${value}" when it should be a non blank string`);
    }
    return value;
}
