/**
 * @prettier
 */

import { useForm as useFormReactHookForm, type UseFormMethods } from 'react-hook-form';

export function useForm(): UseFormMethods<Record<string, any>> {
    const form = useFormReactHookForm();

    return form;
}
