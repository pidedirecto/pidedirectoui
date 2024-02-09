/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function MobileIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 31} height={height ?? size ?? 24} viewBox='0 0 32 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M14.5 19.5H17.5M10.75 21.75H21.25C21.8467 21.75 22.419 21.5129 22.841 21.091C23.2629 20.669 23.5 20.0967 23.5 19.5V4.5C23.5 3.90326 23.2629 3.33097 22.841 2.90901C22.419 2.48705 21.8467 2.25 21.25 2.25H10.75C10.1533 2.25 9.58097 2.48705 9.15901 2.90901C8.73705 3.33097 8.5 3.90326 8.5 4.5V19.5C8.5 20.0967 8.73705 20.669 9.15901 21.091C9.58097 21.5129 10.1533 21.75 10.75 21.75Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
