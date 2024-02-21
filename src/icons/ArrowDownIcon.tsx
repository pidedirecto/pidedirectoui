/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function ArrowDownIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 11} height={height ?? size ?? 6} viewBox='0 0 11 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path d='M9.5625 0.96875L5.5 5.03125L1.4375 0.96875' stroke={color ?? 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
