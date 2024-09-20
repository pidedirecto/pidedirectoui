import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function OutlinedNotificationIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 22} height={height ?? size ?? 20} viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <path
                d='M11.0003 8.1235V11.8735M1.69731 15.2495C0.831309 16.7495 1.91431 18.6235 3.64531 18.6235H18.3553C20.0853 18.6235 21.1683 16.7495 20.3033 15.2495L12.9493 2.5015C12.0833 1.0015 9.91731 1.0015 9.05131 2.5015L1.69731 15.2495ZM11.0003 14.8735H11.0073V14.8815H11.0003V14.8735Z'
                stroke={color ?? '#FC9B41'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
