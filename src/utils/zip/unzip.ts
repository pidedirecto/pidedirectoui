import pako from 'pako';
import { isString } from 'src/utils/string/isString';

export function unzip(base64str: any): any {
    if (!isString(base64str)) return base64str;

    const strData = atob(base64str);

    // Convert binary string to character-number array
    const charData = strData.split('').map((x) => {
        return x.charCodeAt(0);
    });

    // Turn number array into byte-array
    const binData = new Uint8Array(charData);

    return JSON.parse(pako.inflate(binData, { to: 'string' }));
}
