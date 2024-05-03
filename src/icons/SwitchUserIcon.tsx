/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function SwitchUserIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width={width ?? size ?? 24}
            height={height ?? size ?? 24}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke={color ?? 'currentColor'}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            {title && <title>{title}</title>}
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
            <path d='M6 21v-2a4 4 0 0 1 4 -4h3' />
            <path d='M16 22l5 -5' />
            <path d='M21 21.5v-4.5h-4.5' />
        </svg>
    );
}
