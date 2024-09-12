import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function CalendarIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 18} height={height ?? size ?? 18} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M4.33333 1V3M13.6667 1V3M1 15V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V15M1 15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15M1 15V8.33333C1 7.8029 1.21071 7.29419 1.58579 6.91912C1.96086 6.54405 2.46957 6.33333 3 6.33333H15C15.5304 6.33333 16.0391 6.54405 16.4142 6.91912C16.7893 7.29419 17 7.8029 17 8.33333V15'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
