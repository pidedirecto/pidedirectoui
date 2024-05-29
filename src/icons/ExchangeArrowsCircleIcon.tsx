/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function ExchangeArrowsCircleIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 35} height={height ?? size ?? 36} viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <rect width={35} height={36} rx='17.5' fill='#F1F1F1' />
            <path
                d='M13.75 25L10 21.25M10 21.25L13.75 17.5M10 21.25H21.25M21.25 10L25 13.75M25 13.75L21.25 17.5M25 13.75H13.75'
                stroke={color ?? 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
