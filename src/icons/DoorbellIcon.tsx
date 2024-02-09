/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function DoorbellIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 25} height={height ?? size ?? 18} viewBox='0 0 25 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M10.625 0C10.0016 0 9.5 0.501562 9.5 1.125C9.5 1.74844 10.0016 2.25 10.625 2.25H11.375V3.81094C6.10625 4.36875 2 8.83125 2 14.25H23C23 8.83125 18.8938 4.36875 13.625 3.81094V2.25H14.375C14.9984 2.25 15.5 1.74844 15.5 1.125C15.5 0.501562 14.9984 0 14.375 0H12.5H10.625ZM1.625 15.75C1.00156 15.75 0.5 16.2516 0.5 16.875C0.5 17.4984 1.00156 18 1.625 18H23.375C23.9984 18 24.5 17.4984 24.5 16.875C24.5 16.2516 23.9984 15.75 23.375 15.75H1.625Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
