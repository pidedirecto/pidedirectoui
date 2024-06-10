/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function NotificationIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 53} height={height ?? size ?? 54} viewBox='0 0 53 54' fill={color ?? 'currentColor'} xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <path
                d='M53 27C53 30.48 52.3146 33.926 50.9828 37.1411C49.6511 40.3562 47.6991 43.2776 45.2383 45.7383C42.7776 48.1991 39.8562 50.1511 36.6411 51.4828C33.426 52.8146 29.98 53.5 26.5 53.5C23.02 53.5 19.574 52.8146 16.3589 51.4828C13.1438 50.1511 10.2224 48.1991 7.76167 45.7383C5.30092 43.2776 3.34894 40.3562 2.01719 37.1411C0.685443 33.926 -5.18565e-08 30.48 0 27C1.04729e-07 19.9718 2.79196 13.2314 7.76167 8.26167C12.7314 3.29196 19.4718 0.5 26.5 0.5C33.5282 0.5 40.2686 3.29196 45.2383 8.26167C50.208 13.2314 53 19.9718 53 27Z'
                fill={color ?? 'currentColor'}
            />
            <path d='M26.5 16.6526V27.6943M26.5236 36.5276H26.5V36.5511' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
