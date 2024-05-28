/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function CardOutline({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 35} height={height ?? size ?? 36} viewBox='0 0 35 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <circle cx='17.5' cy='18' r='17.5' fill='#F1F1F1' />
            <path d='M21.5 17.5L14.375 17.5' stroke={color ?? 'currentColor'} strokeLinecap='round' />
            <path d='M21.5 20.6666L14.375 20.6666' stroke={color ?? 'currentColor'} strokeLinecap='round' strokeDasharray='2 2' />
            <path d='M21.5 23.8334L14.375 23.8334' stroke={color ?? 'currentColor'} strokeLinecap='round' strokeDasharray='2 2' />
            <path
                d='M14.375 12.75H13C12.4477 12.75 12 13.1977 12 13.75V26C12 26.5523 12.4477 27 13 27H22.875C23.4273 27 23.875 26.5523 23.875 26V13.75C23.875 13.1977 23.4273 12.75 22.875 12.75H21.5'
                stroke={color ?? 'currentColor'}
            />
            <path
                d='M21.5 10.375V11.5625V15.125H14.375V10C14.375 8.89543 15.2704 8 16.375 8H21.5M21.5 10.375H23.875V10C23.875 8.89543 22.9796 8 21.875 8H21.5M21.5 10.375V8'
                stroke={color ?? 'currentColor'}
            />
        </svg>
    );
}
