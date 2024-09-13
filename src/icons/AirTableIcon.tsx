import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function AirTableIcon({ color, width, height, title, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width={width ?? size ?? 24}
            height={height ?? size ?? '24'}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke={color ?? 'currentColor'}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            {title && <title>{title}</title>}
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M3 10v8l7 -3v-2.6z' />
            <path d='M3 6l9 3l9 -3l-9 -3z' />
            <path d='M14 12.3v8.7l7 -3v-8z' />
        </svg>
    );
}
