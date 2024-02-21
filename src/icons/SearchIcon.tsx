/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function SearchIcon({ color, width, height, title, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 20} height={height ?? size ?? 20} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M19 19L13.803 13.803M13.803 13.803C15.2096 12.3964 15.9998 10.4887 15.9998 8.4995C15.9998 6.51031 15.2096 4.60258 13.803 3.196C12.3964 1.78943 10.4887 0.999222 8.49949 0.999222C6.51029 0.999222 4.60256 1.78943 3.19599 3.196C1.78941 4.60258 0.999207 6.51031 0.999207 8.4995C0.999207 10.4887 1.78941 12.3964 3.19599 13.803C4.60256 15.2096 6.51029 15.9998 8.49949 15.9998C10.4887 15.9998 12.3964 15.2096 13.803 13.803V13.803Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
