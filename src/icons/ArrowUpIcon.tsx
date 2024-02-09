/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function ArrowUpIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 12} height={height ?? size ?? 7} viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path d='M1 6L6 0.999999L11 6' stroke={color ?? 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
