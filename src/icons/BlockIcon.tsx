/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function BlockIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 20} height={height ?? size ?? 21} viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M16.3641 16.8641C18.0519 15.1762 19.0001 12.887 19.0001 10.5001C19.0001 8.11309 18.0519 5.82389 16.3641 4.13606C14.6762 2.44822 12.387 1.5 10.0001 1.5C7.61309 1.5 5.32389 2.44822 3.63606 4.13606M16.3641 16.8641C14.6762 18.5519 12.387 19.5001 10.0001 19.5001C7.61309 19.5001 5.32389 18.5519 3.63606 16.8641C1.94822 15.1762 1 12.887 1 10.5001C1 8.11309 1.94822 5.82389 3.63606 4.13606M16.3641 16.8641L3.63606 4.13606'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
