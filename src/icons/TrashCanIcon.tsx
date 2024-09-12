import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function TrashCanIcon({ color, size, title, width, height, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 16} height={height ?? size ?? 18} viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M10.0172 6.53874L9.7333 13.9232M5.80479 13.9232L5.5209 6.53874M13.6996 3.90497C13.9802 3.94763 14.2591 3.99276 14.5381 4.04117M13.6996 3.90497L12.8233 15.2958C12.7875 15.7596 12.578 16.1928 12.2366 16.5087C11.8953 16.8247 11.4472 17.0001 10.9821 17H4.55601C4.09087 17.0001 3.64282 16.8247 3.30146 16.5087C2.9601 16.1928 2.75059 15.7596 2.71483 15.2958L1.83854 3.90497M13.6996 3.90497C12.7526 3.7618 11.8007 3.65315 10.8459 3.57923M1.83854 3.90497C1.55793 3.94681 1.27897 3.99194 1 4.04035M1.83854 3.90497C2.7855 3.76181 3.73735 3.65316 4.69221 3.57923M10.8459 3.57923V2.82766C10.8459 1.85948 10.0992 1.05212 9.13106 1.02176C8.22329 0.992747 7.31481 0.992747 6.40703 1.02176C5.43886 1.05212 4.69221 1.8603 4.69221 2.82766V3.57923M10.8459 3.57923C8.79772 3.42094 6.74038 3.42094 4.69221 3.57923'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
