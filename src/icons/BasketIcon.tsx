/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function BasketIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 18} height={height ?? size ?? 18} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M15.1875 5.625L14.7188 13.599C14.6935 14.0288 14.5049 14.4327 14.1916 14.728C13.8783 15.0233 13.464 15.1877 13.0335 15.1875H4.9665C4.53597 15.1877 4.12166 15.0233 3.80837 14.728C3.49508 14.4327 3.30651 14.0288 3.28125 13.599L2.8125 5.625M7.5 8.4375H10.5M2.53125 5.625H15.4688C15.9345 5.625 16.3125 5.247 16.3125 4.78125V3.65625C16.3125 3.1905 15.9345 2.8125 15.4688 2.8125H2.53125C2.0655 2.8125 1.6875 3.1905 1.6875 3.65625V4.78125C1.6875 5.247 2.0655 5.625 2.53125 5.625Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
