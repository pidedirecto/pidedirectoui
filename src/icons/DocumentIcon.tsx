/**
 * @prettier
 */

import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function DocumentIcon({ color, title, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 30} height={height ?? size ?? 40} viewBox='0 0 30 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M5 0C2.24219 0 0 2.24219 0 5V35C0 37.7578 2.24219 40 5 40H25C27.7578 40 30 37.7578 30 35V12.5H20C18.6172 12.5 17.5 11.3828 17.5 10V0H5ZM20 0V10H30L20 0ZM6.25 5H11.25C11.9375 5 12.5 5.5625 12.5 6.25C12.5 6.9375 11.9375 7.5 11.25 7.5H6.25C5.5625 7.5 5 6.9375 5 6.25C5 5.5625 5.5625 5 6.25 5ZM6.25 10H11.25C11.9375 10 12.5 10.5625 12.5 11.25C12.5 11.9375 11.9375 12.5 11.25 12.5H6.25C5.5625 12.5 5 11.9375 5 11.25C5 10.5625 5.5625 10 6.25 10ZM7.5 17.5H22.5C23.8828 17.5 25 18.6172 25 20V25C25 26.3828 23.8828 27.5 22.5 27.5H7.5C6.11719 27.5 5 26.3828 5 25V20C5 18.6172 6.11719 17.5 7.5 17.5ZM7.5 20V25H22.5V20H7.5ZM18.75 32.5H23.75C24.4375 32.5 25 33.0625 25 33.75C25 34.4375 24.4375 35 23.75 35H18.75C18.0625 35 17.5 34.4375 17.5 33.75C17.5 33.0625 18.0625 32.5 18.75 32.5Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
