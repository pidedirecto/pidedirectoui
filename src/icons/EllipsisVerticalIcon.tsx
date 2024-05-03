/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function EllipsisVerticalIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
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
            <title>{title}</title>
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
            <path d='M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
            <path d='M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
        </svg>
    );
}
