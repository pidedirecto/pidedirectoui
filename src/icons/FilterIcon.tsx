import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function FilterIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 14} height={height ?? size ?? 14} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M7 1C8.83666 1 10.6367 1.15467 12.3887 1.452C12.744 1.512 13 1.82267 13 2.18267V2.87867C13 3.07565 12.9612 3.27071 12.8858 3.4527C12.8104 3.63469 12.7 3.80005 12.5607 3.93933L8.93933 7.56067C8.80004 7.69996 8.68956 7.86532 8.61417 8.04731C8.53879 8.2293 8.5 8.42435 8.5 8.62133V10.5727C8.50005 10.8513 8.42249 11.1245 8.276 11.3615C8.12952 11.5985 7.91991 11.7901 7.67066 11.9147L5.5 13V8.62133C5.5 8.42435 5.4612 8.2293 5.38582 8.04731C5.31044 7.86532 5.19995 7.69996 5.06067 7.56067L1.43933 3.93933C1.30005 3.80005 1.18956 3.63469 1.11418 3.4527C1.0388 3.27071 0.999998 3.07565 1 2.87867V2.18267C1 1.82267 1.256 1.512 1.61133 1.452C3.39171 1.15057 5.19428 0.999372 7 1Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
