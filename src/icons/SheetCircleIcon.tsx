/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function SheetCircleIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 35} height={height ?? size ?? 35} viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <rect width='35' height='35' rx='17.5' fill='#F1F1F1' />
            <path d='M21.6999 17.5L13.2999 17.5' stroke='#616B79' strokeLinecap='round' />
            <path d='M21.7001 21.2332L13.3001 21.2332M21.7001 24.9667L13.3001 24.9667' stroke='#616B79' strokeLinecap='round' strokeDasharray='2 2' />
            <path
                d='M13.3 11.9H11.5C10.9477 11.9 10.5 12.3477 10.5 12.9V27.7C10.5 28.2523 10.9477 28.7 11.5 28.7H23.5C24.0523 28.7 24.5 28.2523 24.5 27.7V12.9C24.5 12.3477 24.0523 11.9 23.5 11.9H21.7'
                stroke={color ?? 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M21.7001 9.1V10.5V14.7H13.3001V8.3C13.3001 7.19543 14.1955 6.3 15.3001 6.3H21.7001M21.7001 9.1H24.5001V8.3C24.5001 7.19543 23.6046 6.3 22.5001 6.3H21.7001M21.7001 9.1V6.3'
                stroke={color ?? 'currentColor'}
                strokeLinecap='round'
            />
        </svg>
    );
}
