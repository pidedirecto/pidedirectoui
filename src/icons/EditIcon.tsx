import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function EditIcon({ color, title, size, width, height, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 21} height={height ?? size ?? 21} viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M14.862 3.23725L17.5 5.87525M16 12.7502V17.5002C16 18.097 15.7629 18.6693 15.341 19.0912C14.919 19.5132 14.3467 19.7502 13.75 19.7502H3.25C2.65326 19.7502 2.08097 19.5132 1.65901 19.0912C1.23705 18.6693 1 18.097 1 17.5002V7.00025C1 6.40351 1.23705 5.83121 1.65901 5.40926C2.08097 4.9873 2.65326 4.75025 3.25 4.75025H8M14.862 3.23725L16.549 1.54925C16.9007 1.19757 17.3777 1 17.875 1C18.3723 1 18.8493 1.19757 19.201 1.54925C19.5527 1.90092 19.7502 2.3779 19.7502 2.87525C19.7502 3.37259 19.5527 3.84957 19.201 4.20125L8.582 14.8202C8.05332 15.3486 7.40137 15.737 6.685 15.9502L4 16.7502L4.8 14.0652C5.01328 13.3489 5.40163 12.6969 5.93 12.1682L14.862 3.23725V3.23725Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
