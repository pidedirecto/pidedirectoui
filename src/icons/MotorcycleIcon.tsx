import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function MotorcycleIcon({ width, height, color, title, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 90} height={height ?? size ?? 90} viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M36.6667 55.9176C36.6667 59.6296 33.6833 62.6362 30 62.6362C26.3167 62.6362 23.3333 59.6296 23.3333 55.9176M67.25 54.238C68.1667 57.8324 66.0083 61.494 62.4417 62.4094C58.875 63.3332 55.2417 61.1581 54.3333 57.5637C54.0583 56.4719 54.0583 55.3214 54.3333 54.2296'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M50 27.3638H53.3333C54.25 27.3638 56.6666 28.3716 56.6666 30.7231V46.0078C56.6666 48.6952 54.25 54.8259 46.5833 54.8259'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M56.6667 45.8398H61.6667C69.75 45.8398 70 54.238 70 54.238H50.4167M31.6667 44.1602C25.225 44.1602 20 49.4258 20 55.9176H46.6667C46.6667 49.4258 41.4417 44.1602 35 44.1602H31.6667Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M60.8333 31.5629V36.6018M38.25 37.4416H20C20.8333 42.5645 25.75 44.1602 31.5833 44.1602H34.9167C37.5167 44.2526 40.1083 43.7655 42.5 42.7325C45.0833 41.3048 45.3333 37.4416 38.25 37.4416Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
