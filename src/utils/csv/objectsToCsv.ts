/**
 * @prettier
 */
import Papa from 'papaparse';

export function objectsToCsv(objects: Array<any>): string {
    return Papa.unparse(objects, { header: true });
}
