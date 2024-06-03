/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function WalletIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 35} height={height ?? size ?? 35} viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M23.125 13V9.625C23.125 9.32663 23.0065 9.04048 22.7955 8.82951C22.5845 8.61853 22.2984 8.5 22 8.5H10.75C10.1532 8.5 9.58095 8.73705 9.15899 9.15901C8.73704 9.58097 8.49998 10.1533 8.49998 10.75M8.49998 10.75C8.49998 11.3467 8.73704 11.919 9.15899 12.341C9.58095 12.7629 10.1532 13 10.75 13H24.25C24.5484 13 24.8345 13.1185 25.0455 13.3295C25.2565 13.5405 25.375 13.8266 25.375 14.125V17.5M8.49998 10.75V24.25C8.49998 24.8467 8.73704 25.419 9.15899 25.841C9.58095 26.2629 10.1532 26.5 10.75 26.5H24.25C24.5484 26.5 24.8345 26.3815 25.0455 26.1705C25.2565 25.9595 25.375 25.6734 25.375 25.375V22M26.5 17.5V22H22C21.4033 22 20.831 21.7629 20.409 21.341C19.9871 20.919 19.75 20.3467 19.75 19.75C19.75 19.1533 19.9871 18.581 20.409 18.159C20.831 17.737 21.4033 17.5 22 17.5H26.5Z'
                stroke={color ?? 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
