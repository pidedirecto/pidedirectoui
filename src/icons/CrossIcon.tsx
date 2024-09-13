import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function CrossIcon({ title, color, size, width, height, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} focusable='false' width={width ?? size ?? 10} height={height ?? size ?? 10} viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path d='M8.60658 1.46446L1.53551 8.53553M8.60658 8.53553L1.53551 1.46446' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
