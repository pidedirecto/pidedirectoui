/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function OutlinedDoorbellIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? '20'} height={height ?? size ?? '14'} viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M10.168 3.66667C6.11788 3.66667 2.83464 6.94991 2.83464 11V13H17.5013V11C17.5013 6.94991 14.2181 3.66667 10.168 3.66667ZM10.168 3.66667V1M1.16797 13H19.168M7.83464 1H12.5013'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
        </svg>
    );
}
