/**
 * @prettier
 */
import type { FieldName, UseWatchOptions } from 'react-hook-form';

export type UseWatch = (options?: UseWatchOptions) => TFieldValues[FieldName<TFieldValues>] | undefined;
