/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function BluetoothIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 30} height={height ?? size ?? 49} viewBox='0 0 30 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path d='M2.99353 15.0787L27.0065 36.176L14.2748 46V3L27.0065 15.0787L2.99353 36.176' stroke={color || 'currentColor'} strokeWidth='5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
