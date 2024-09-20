import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function NotificationIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 21} height={height ?? size ?? 18} viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <path
                d='M2.35112 18C0.544548 18 -0.585736 16.0442 0.318074 14.4787L7.99315 1.17413C8.89696 -0.391362 11.1575 -0.391362 12.0613 1.17413L19.7364 14.4787C20.6392 16.0442 19.5089 18 17.7034 18H2.35112Z'
                fill={color ?? '#FC9B41'}
            />
            <path d='M10.1204 7.3056V11.2193M10.1204 14.3503H10.1277V14.3587H10.1204V14.3503Z' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
