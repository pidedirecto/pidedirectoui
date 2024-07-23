/**
 * @prettier
 */
import { useEffect, useRef } from 'react';

export function useReadFiles() {
    const fileReader = useRef<FileReader>(new FileReader());
    const resolvePromise = useRef<Function | null>(null);
    const rejectPromise = useRef<Function | null>(null);

    useEffect(() => {
        fileReader.current.addEventListener('loadend', fileLoadEnd);

        return () => {
            fileReader.current.removeEventListener('loadend', fileLoadEnd);
        };
    }, []);

    const fileLoadEnd = (e: ProgressEvent<FileReader>) => {
        if (!e.target?.result) {
            rejectPromise.current?.('Failed to process files');
            clearState();
            return;
        }

        resolvePromise.current?.(e.target?.result as ArrayBuffer);
        clearState();
    };

    const clearState = () => {
        resolvePromise.current = null;
        rejectPromise.current = null;
    };

    const readFile: ReadFile = async (file: File) => {
        return new Promise((resolve, reject) => {
            resolvePromise.current = resolve;
            rejectPromise.current = reject;
            fileReader.current.readAsArrayBuffer(file);
        });
    };

    const readFiles = async (files: FileList) => {
        const result: Array<{ data: ArrayBuffer; file: File }> = [];
        for (const file of Array.from(files) as any) {
            const fileTransformed = await readFile(file);
            result.push({ data: fileTransformed, file });
        }
        return result;
    };

    return readFiles;
}

type ReadFile = (file: File) => Promise<ArrayBuffer>;
