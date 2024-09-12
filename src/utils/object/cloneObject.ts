import { isObject } from 'src/utils/object/isObject';

export function cloneObject<T extends Object>(obj: T): T {
    try {
        return structuredClone(obj);
    } catch (e) {
        return manuallyCloneObject(obj);
    }
}

function manuallyCloneObject<T extends Object>(obj: T): T {
    if (!isObject(obj)) return {} as any;

    const copy: Record<any, any> = {};

    Object.keys(obj as Object).forEach((key: string) => {
        // @ts-ignore
        const value = obj[key];

        try {
            copy[key] = structuredClone(value);
        } catch (e) {
            copy[key] = value;
        }
    });
    return copy as any;
}
