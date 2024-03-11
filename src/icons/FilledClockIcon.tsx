/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function FilledClockIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width={width ?? size ?? 20} height={height ?? size ?? 20}>
            {title && <title>{title}</title>}
            <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z'
                clipRule='evenodd'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
