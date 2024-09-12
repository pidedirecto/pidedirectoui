import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function WifiOffIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg
            {...props}
            width={size ?? width ?? 24}
            height={size ?? height ?? 24}
            viewBox='0 0 24 24'
            fill='none'
            stroke={color ?? 'currentColor'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <title>{title}</title>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 18l.01 0' />
            <path d='M9.172 15.172a4 4 0 0 1 5.656 0' />
            <path d='M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2' />
            <path d='M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374' />
            <path d='M3 3l18 18' />
        </svg>
    );
}
