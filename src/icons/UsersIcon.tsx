import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function UsersIcon({ color, width, height, title, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg
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
            <path d='M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
            <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
            <path d='M16 3.13a4 4 0 0 1 0 7.75' />
            <path d='M21 21v-2a4 4 0 0 0 -3 -3.85' />
        </svg>
    );
}
