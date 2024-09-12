import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function RestoreIcon({ width, height, color, title, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? '24'} height={height ?? size ?? '24'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <g clipPath='url(#clip0_290_37)'>
                <path d='M9.99953 20.777C9.12914 20.5796 8.29321 20.2529 7.51953 19.808' stroke={color ?? 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path
                    d='M14 3.22302C15.9882 3.67709 17.7632 4.79271 19.0347 6.38723C20.3061 7.98174 20.9984 9.96067 20.9984 12C20.9984 14.0394 20.3061 16.0183 19.0347 17.6128C17.7632 19.2073 15.9882 20.323 14 20.777'
                    stroke={color ?? 'currentColor'}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path d='M4.57856 17.093C4.03307 16.3004 3.61876 15.4252 3.35156 14.501' stroke={color ?? 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path
                    d='M3.12402 10.5C3.28402 9.55002 3.59202 8.65002 4.02402 7.82502L4.19302 7.52002'
                    stroke={color ?? 'currentColor'}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path d='M6.90723 4.57902C7.84288 3.93492 8.89255 3.47474 10.0002 3.22302' stroke={color ?? 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M12 8V12L15 15' stroke={color ?? 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </g>
            <defs>
                <clipPath id='clip0_290_37'>
                    <rect width='24' height='24' fill='transparent' />
                </clipPath>
            </defs>
        </svg>
    );
}
