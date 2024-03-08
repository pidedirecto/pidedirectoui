/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function MapIcon({ title, height, width, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 22} height={height ?? size ?? 21} viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M7.66667 19.4445L1.61444 16.4178C1.42991 16.3256 1.27469 16.1838 1.16617 16.0084C1.05765 15.8329 1.00011 15.6308 1 15.4245V3.46446C1.0001 3.27514 1.04858 3.08898 1.14083 2.92366C1.23308 2.75833 1.36604 2.61931 1.5271 2.5198C1.68817 2.42029 1.87199 2.36359 2.06112 2.35507C2.25025 2.34655 2.43842 2.3865 2.60778 2.47113L7.66667 5.00002M7.66667 19.4445L14.3333 16.1111M7.66667 19.4445V5.00002M14.3333 16.1111L19.3922 18.64C19.5616 18.7246 19.7498 18.7646 19.9389 18.7561C20.128 18.7476 20.3118 18.6909 20.4729 18.5913C20.634 18.4918 20.7669 18.3528 20.8592 18.1875C20.9514 18.0222 20.9999 17.836 21 17.6467V5.68669C20.9999 5.4804 20.9424 5.27821 20.8338 5.10277C20.7253 4.92733 20.5701 4.78557 20.3856 4.69335L14.3333 1.66669M14.3333 16.1111V1.66669M14.3333 1.66669L7.66667 5.00002'
                stroke={color ?? 'currentColor'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
