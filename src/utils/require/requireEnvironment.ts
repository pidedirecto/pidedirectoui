/**
 * @prettier
 */
import { Environment, Environments } from 'src/constants/Environment';
import { isString } from 'src/utils/string/isString';

export function requireEnvironment<T extends string>(value?: T | null): Environment {
    if (value === undefined) {
        throw new Error('Required value is undefined when it should be a Environment');
    }
    if (value === null) {
        throw new Error('Required value is null when it should be a Environment');
    }
    if (!isString(value)) {
        throw new Error(`Required value is ${value} when it should be a Environment`);
    }
    if (!Object.values(Environments).includes(value as Environment)) {
        throw new Error(`Required value is "${value as any}" when it should be a Environment`);
    }
    return value as any;
}
