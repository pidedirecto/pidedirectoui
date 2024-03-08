/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function DownloadIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} xmlns='http://www.w3.org/2000/svg' width={width ?? size ?? 18} height={height ?? size ?? 18} viewBox='0 0 18 18' fill='none'>
            {title && <title>{title}</title>}
            <path
                d='M1.5 12.75V14.625C1.5 15.1223 1.69754 15.5992 2.04917 15.9508C2.40081 16.3025 2.87772 16.5 3.375 16.5H14.625C15.1223 16.5 15.5992 16.3025 15.9508 15.9508C16.3025 15.5992 16.5 15.1223 16.5 14.625V12.75M12.75 9L9 12.75M9 12.75L5.25 9M9 12.75V1.5'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
