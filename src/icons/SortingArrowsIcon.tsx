import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function SortingArrowsIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 20} height={height ?? size ?? 19} viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M3.5 6.25L6.75 3M6.75 3L10 6.25M6.75 3V12.75M16.5 12.75L13.25 16M13.25 16L10 12.75M13.25 16V6.25'
                stroke='#8D25FF'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
