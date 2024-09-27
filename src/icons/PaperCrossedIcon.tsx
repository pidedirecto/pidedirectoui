import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function PaperCrossedIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 18} height={height ?? size ?? 20} viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M7.75 18.4375H2.90625C2.13 18.4375 1.5 17.8075 1.5 17.0312V2.96875C1.5 2.1925 2.13 1.5625 2.90625 1.5625H7.125H15.0938C15.87 1.5625 16.5 2.1925 16.5 2.96875V9.6875M10.9976 12.9351L13.7488 15.6863M13.7488 15.6863L16.5 18.4375M13.7488 15.6863L16.5 12.9351M13.7488 15.6863L10.9976 18.4375'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
