import { useFieldArray as useFieldArrayReactHookForm, type UseFieldArrayMethods, type UseFieldArrayOptions } from 'react-hook-form';

export function useFieldArray({ control, name }: UseFieldArrayOptions): UseFieldArrayMethods {
    return useFieldArrayReactHookForm({ control, name });
}
