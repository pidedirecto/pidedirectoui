import CryptoJS from 'crypto-js';

export function hashMd5FromArrayBuffer(value?: string | ArrayBuffer | null): string {
    if (!value) {
        throw Error(`Cannot create hash md5 from value=${value}`);
    }
    return CryptoJS.MD5(CryptoJS.lib.WordArray.create(value as any)).toString();
}
