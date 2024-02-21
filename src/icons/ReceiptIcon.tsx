/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function ReceiptIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 26} height={height ?? size ?? 26} viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M18.6996 15.1309H22.1244C23.7122 15.1309 25 13.8223 25 12.2076V3.88797C25 2.29277 23.7277 1 22.159 1H7.03502C3.70164 1 1 3.7465 1 7.13541V23.5819C1 24.4279 1.86541 24.9866 2.61804 24.6271L3.99208 23.971C4.96806 23.5047 6.10031 23.5155 7.06745 23.9991L8.32797 24.6293C9.30026 25.1158 10.4377 25.1237 11.4166 24.6516L12.8172 23.976C13.791 23.5068 14.9217 23.5119 15.8911 23.9912L17.1066 24.5924C17.8607 24.9656 18.7387 24.4069 18.7387 23.5538V3.88942C18.7387 2.29349 20.011 1 21.5811 1'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeMiterlimit='10'
            />
            <path d='M6 13.4286L9 16L14 10' stroke={color ?? 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
