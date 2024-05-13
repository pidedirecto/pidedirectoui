/**
 * @prettier
 */

import { useWatch, type UseFormMethods } from 'react-hook-form';

export function useFormWatch(form: UseFormMethods<Record<string, any>>, fieldName: string): any {
    const value = useWatch({
        name: fieldName,
        control: form.control,
    });

    return value;
}
