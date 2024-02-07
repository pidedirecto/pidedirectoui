/**
 * @prettier
 */
import * as React from 'react';

export function DeviceIcon({ title, color, width, height, size }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 16} height={height ?? size ?? 21} viewBox='0 0 16 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path d='M4.42847 4.92847H11.2856' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' />
            <path d='M4.42847 7.5H11.2856' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' />
            <circle cx='8.28571' cy='14.7857' r='1.28571' fill={color || 'currentColor'} />
            <rect x='1' y='1.5' width='13.7143' height='18' rx='2' stroke={color || 'currentColor'} strokeWidth='1.5' />
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
