/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function DragIcon({ color, title, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 14} height={height ?? size ?? 22} viewBox='0 0 14 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 5.25C4.24264 5.25 5.25 4.24264 5.25 3C5.25 1.75736 4.24264 0.75 3 0.75C1.75736 0.75 0.75 1.75736 0.75 3C0.75 4.24264 1.75736 5.25 3 5.25ZM11 5.25C12.2426 5.25 13.25 4.24264 13.25 3C13.25 1.75736 12.2426 0.75 11 0.75C9.75736 0.75 8.75 1.75736 8.75 3C8.75 4.24264 9.75736 5.25 11 5.25ZM13.25 11C13.25 12.2426 12.2426 13.25 11 13.25C9.75736 13.25 8.75 12.2426 8.75 11C8.75 9.75736 9.75736 8.75 11 8.75C12.2426 8.75 13.25 9.75736 13.25 11ZM3 13.25C4.24264 13.25 5.25 12.2426 5.25 11C5.25 9.75736 4.24264 8.75 3 8.75C1.75736 8.75 0.75 9.75736 0.75 11C0.75 12.2426 1.75736 13.25 3 13.25ZM13.25 19C13.25 20.2426 12.2426 21.25 11 21.25C9.75736 21.25 8.75 20.2426 8.75 19C8.75 17.7574 9.75736 16.75 11 16.75C12.2426 16.75 13.25 17.7574 13.25 19ZM3 21.25C4.24264 21.25 5.25 20.2426 5.25 19C5.25 17.7574 4.24264 16.75 3 16.75C1.75736 16.75 0.75 17.7574 0.75 19C0.75 20.2426 1.75736 21.25 3 21.25Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}