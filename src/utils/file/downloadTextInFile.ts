export function downloadTextInFile(text?: string | null, fileName?: string | null): void {
    const element = document.createElement('a');
    const file = new Blob([text as any], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName || 'exported.txt';
    (document.body as any).appendChild(element); // Required for this to work in FireFox
    element.click();
}
