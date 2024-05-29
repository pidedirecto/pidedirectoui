/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function CreditCardCircleIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 35} height={height ?? size ?? 35} viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <rect width='35' height='35' rx='17.5' fill='#F1F1F1' />
            <path
                d='M8.39999 14H26.6M8.39999 14.7H26.6M10.5 24.5H24.5C25.0569 24.5 25.5911 24.2788 25.9849 23.8849C26.3787 23.4911 26.6 22.957 26.6 22.4V12.6C26.6 12.043 26.3787 11.5089 25.9849 11.1151C25.5911 10.7212 25.0569 10.5 24.5 10.5H10.5C9.94304 10.5 9.4089 10.7212 9.01507 11.1151C8.62124 11.5089 8.39999 12.043 8.39999 12.6V22.4C8.39999 22.957 8.62124 23.4911 9.01507 23.8849C9.4089 24.2788 9.94304 24.5 10.5 24.5Z'
                stroke={color ?? 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
