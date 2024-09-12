import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function PennantIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 14} height={height ?? size ?? 16} viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M11.1015 1.63666C11.9082 1.73053 12.5 2.42646 12.5 3.239V14.6005L7 11.8505L1.5 14.6005V3.239C1.5 2.42646 2.09107 1.73053 2.89847 1.63666C5.62367 1.32033 8.37633 1.32033 11.1015 1.63666Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
