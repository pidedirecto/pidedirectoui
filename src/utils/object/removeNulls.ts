import { isArray } from 'src/utils/array/isArray';

export function removeNulls<T extends Object | Array<any> | void | null>(obj: T): T {
    if (isArray(obj)) {
        return (obj as Array<any>).filter((i) => i !== null && i !== undefined).map(removeNulls) as any;
    }
    if (obj?.constructor?.name === 'Object') {
        const copy: Record<any, any> = {};
        Object.keys(obj as Object).forEach((key: string) => {
            // @ts-ignore
            const value = obj[key];
            if (value === null) return;
            if ((value as any) === undefined) return;
            copy[key] = removeNulls(value);
        });
        return copy as any;
    }
    return obj;
}
