import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function ColumnsIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 17} height={height ?? size ?? 23} xmlns='http://www.w3.org/2000/svg' viewBox='4 5 17 13'>
            <title>{title}</title>
            <path d='M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z' fill={color ?? 'currentColor'} />
        </svg>
    );
}
