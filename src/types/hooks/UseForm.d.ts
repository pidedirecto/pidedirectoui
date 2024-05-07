/**
 * @prettier
 */
import type { UseFormMethods, UseFormOptions } from 'react-hook-form';

export type UseForm = (options?: UseFormOptions) => UseFormMethods<Record<string, any>>;
