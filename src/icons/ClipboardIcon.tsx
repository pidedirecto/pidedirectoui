import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function ClipboardIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 16} height={height ?? size ?? 19} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='1 0.5 16 19'>
            {title && <title>{title}</title>}
            <path
                d='M5.25 9.25H12.75M5.25 12.25H12.75M12.438 3.25H15.75C16.1642 3.25 16.5 3.58579 16.5 4V18.25C16.5 18.6642 16.1642 19 15.75 19H2.25C1.83579 19 1.5 18.6642 1.5 18.25V4C1.5 3.58579 1.83579 3.25 2.25 3.25H5.25M5.25 4.75C5.25 2.67893 6.92893 1 9 1C11.0711 1 12.75 2.67893 12.75 4.75V5.24702C12.75 5.45413 12.5821 5.62194 12.375 5.62194H5.62499C5.41789 5.62194 5.25 5.45409 5.25 5.24699V4.75Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
            />
        </svg>
    );
}
