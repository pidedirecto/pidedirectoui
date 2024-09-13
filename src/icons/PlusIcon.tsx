import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function PlusIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 18} height={height ?? size ?? 18} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path d='M9 1.5V16.5M16.5 9H1.5' stroke='#8D25FF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
