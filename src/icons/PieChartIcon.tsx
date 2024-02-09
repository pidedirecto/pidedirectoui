/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function PieChartIcon({ color, title, width, height, size }: SvgIconProps): React.ReactElement {
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
            <title>{title}</title>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-3.8a4.1 4.1 0 1 1 -5 -5v-4a.9 .9 0 0 0 -1 -.8' />
            <path d='M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a9 9 0 0 0 -1 -1v-4.5' />
        </svg>
    );
}
