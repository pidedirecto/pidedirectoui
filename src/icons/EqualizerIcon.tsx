import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function EqualizerIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 24} height={height ?? size ?? 24} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <path d='M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z' fill={color ?? 'currentColor'}></path>
        </svg>
    );
}
