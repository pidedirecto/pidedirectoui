/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function HistoryIcon({ color, title, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={width ?? size ?? 18} height={height ?? size ?? 18} viewBox='0 0 18 18' fill='none'>
            {title && <title>{title}</title>}
            <path
                fill='none'
                d='M13.5 15.0005C12.2465 15.9421 10.6884 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C10.9209 1.5 12.6731 2.22213 14 3.40973C14.886 4.20276 15.3 4.9 16.5 6.5M16.5 6.5V3M16.5 6.5H13'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path fill='none' d='M8.5 5.5V9.5L12 11.5' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
