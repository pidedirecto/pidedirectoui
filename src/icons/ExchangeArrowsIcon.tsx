/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function ExchangeArrowsIcon({ color, title, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 22} height={height ?? size ?? 22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path d='M6 21L1 16M1 16L6 11M1 16H16M16 1L21 6M21 6L16 11M21 6H6' stroke={color ?? 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
