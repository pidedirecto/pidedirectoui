/**
 * @prettier
 */
import type { ValidationRule } from 'react-hook-form';
import { isObject } from 'src/utils/object/isObject';

export function getFormFieldLabel(required: ValidationRule<boolean> | undefined, label: string | undefined): string | undefined {
    if (!label) return;
    //@ts-ignore
    if (isObject(required)) return required?.value ? `${label}*` : label;
    return required ? `${label}*` : label;
}
