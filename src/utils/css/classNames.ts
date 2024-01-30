/**
 * @prettier
 */
import { isString } from 'src/utils/string/isString';

export function classNames(...args: Array<string | undefined>): string {
    return args.filter(isString).join(' ');
}
