/**
 * @prettier
 */
import type { Control, UseFieldArrayMethods } from 'react-hook-form';

export type UseFieldArray = (UseFieldArrayOptions) => UseFieldArrayMethods;

export type UseFieldArrayOptions = {
    control: Control<Record<string, any>>;
    name: string;
};
