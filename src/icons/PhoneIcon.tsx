/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function PhoneIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
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
            <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
        </svg>
    );
}
