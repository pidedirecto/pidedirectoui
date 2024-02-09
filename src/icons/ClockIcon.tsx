/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function ClockIcon({ color, width, height, title, size }: SvgIconProps): React.ReactElement {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-alarm'
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
            <path d='M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
            <path d='M12 10l0 3l2 0' />
            <path d='M7 4l-2.75 2' />
            <path d='M17 4l2.75 2' />
        </svg>
    );
}
