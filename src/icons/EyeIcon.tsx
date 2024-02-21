/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function EyeIcon({ color, title, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 22} height={height ?? size ?? 18} viewBox='0 0 22 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M1.03601 9.322C0.967 9.11459 0.967 8.89041 1.03601 8.683C2.42301 4.51 6.36001 1.5 11 1.5C15.638 1.5 19.573 4.507 20.963 8.678C21.033 8.885 21.033 9.109 20.963 9.317C19.577 13.49 15.64 16.5 11 16.5C6.36201 16.5 2.42701 13.493 1.03701 9.322H1.03601Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M14 9C14 9.79565 13.6839 10.5587 13.1213 11.1213C12.5587 11.6839 11.7956 12 11 12C10.2044 12 9.44129 11.6839 8.87868 11.1213C8.31607 10.5587 8 9.79565 8 9C8 8.20435 8.31607 7.44129 8.87868 6.87868C9.44129 6.31607 10.2044 6 11 6C11.7956 6 12.5587 6.31607 13.1213 6.87868C13.6839 7.44129 14 8.20435 14 9V9Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
