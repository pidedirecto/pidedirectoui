/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function PlusIcon({ color, title, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 10} height={height ?? size ?? 10} viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path d='M5 1V9V1ZM9 5H1H9Z' fill={color || 'currentColor'} />
            <path d='M5 1V9M9 5H1' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
