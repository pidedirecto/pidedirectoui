/**
 * @prettier
 */
import * as React from 'react';

export function BillIcon({ title, color, width, height, size }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 16} height={height ?? size ?? 21} viewBox='0 0 16 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M3.84641 6.57653H12.3842M3.84641 9.80704H12.3842M3.84641 13.0376H12.3842M14.9225 3.81538V19.5L11.4612 18.1155L7.99993 19.5L4.53866 18.1155L1.07739 19.5V3.81538C1.07739 2.79269 1.82133 1.91676 2.83756 1.79861C6.26762 1.40046 9.73223 1.40046 13.1623 1.79861C14.1776 1.91676 14.9225 2.79269 14.9225 3.81538Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

type Props = {
    width?: number;
    height?: number;
    size?: number;
    color?: string;
    title?: string;
};
