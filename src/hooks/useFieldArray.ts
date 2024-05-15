/**
 * @prettier
 */

import { useFieldArray as useFieldArrayReactHookForm, type UseFieldArrayMethods } from 'react-hook-form';
import { UseFieldArrayOptions } from 'src/types/hooks/UseFieldArray';

export function useFieldArray({ control, name }: UseFieldArrayOptions): UseFieldArrayMethods {
    return useFieldArrayReactHookForm({ control, name });
}
