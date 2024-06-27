/**
 * @prettier
 */
import { useFormContext as useFormContextReactHookForm, type UseFormMethods } from 'react-hook-form';

export function useFormContext(): UseFormMethods<Record<string, any>> {
    return useFormContextReactHookForm();
}
