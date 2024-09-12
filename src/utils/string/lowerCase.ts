import { isString } from 'src/utils/string/isString';

export function lowerCase<T extends string | null | undefined>(value: T): T {
    if (value === undefined || value === null || !isString(value)) {
        return value;
    }
    return value.toLowerCase() as any;
}
