import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function MonitorIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 24} height={height ?? size ?? 24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M7 20H17M9 16V20M15 16V20M7 10H9L11 13L13 7L14 10H17M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V15C21 15.2652 20.8946 15.5196 20.7071 15.7071C20.5196 15.8946 20.2652 16 20 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15V5Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
