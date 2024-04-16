/**
 * @prettier
 */
import { current } from 'immer';

export function logStore(...args: Array<any>): void {
    const mappedArgs = args.map((arg) => {
        try {
            return current(arg);
        } catch (e) {
            return arg;
        }
    });

    console.log(...mappedArgs);
}
