/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function MegaphoneIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 21} height={height ?? size ?? 19} viewBox='0 0 21 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M4.82979 12.7553C2.71465 12.7553 1 11.0407 1 8.92553C1 6.8104 2.71465 5.09574 4.82979 5.09574C5.81072 5.13208 7.15146 5.0981 8.65957 4.93908M4.82979 12.7553C7.91262 12.7553 14.8484 12.6886 19.2469 16.1666C19.5963 16.4429 20.1489 16.2064 20.1489 15.761V1.70711C20.1489 1.26165 19.5957 1.02402 19.2455 1.29938C16.3485 3.57762 12.0749 4.57898 8.65957 4.93908M4.82979 12.7553L6.18189 17.8257C6.27013 18.1566 6.65741 18.3029 6.94236 18.1129L8.43692 17.1165C8.57602 17.0238 8.65957 16.8677 8.65957 16.7005V4.93908'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
