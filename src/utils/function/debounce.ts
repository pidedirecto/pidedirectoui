/**
 * @prettier
 */

export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
    let timeout: NodeJS.Timeout | undefined = undefined;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            //@ts-ignore
            fn.apply(this, arguments);
        }, delay);
    } as T;
}
