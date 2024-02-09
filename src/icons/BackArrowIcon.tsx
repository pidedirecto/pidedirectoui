/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function BackArrowIcon({ title, width, height, color, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 20} height={height ?? size ?? 10} viewBox='0 0 20 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path d='M4.75 8.75L1 5M1 5L4.75 1.25M1 5H19' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
