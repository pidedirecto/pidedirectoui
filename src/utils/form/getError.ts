/**
 * @prettier
 */
export function getError(errors: any, name?: string): any {
    if (!name) return;
    const names = name.split('.');
    let error = errors;
    for (name of names) {
        error = error[name];
        if (!error) return;
    }
    return error;
}
