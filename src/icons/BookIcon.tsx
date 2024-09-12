import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function BookIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 18} height={height ?? size ?? 19} viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M9 5.0315C7.76371 3.92252 6.1608 3.31021 4.5 3.3125C3.711 3.3125 2.9535 3.4475 2.25 3.6965V14.384C2.97272 14.129 3.73362 13.9992 4.5 14C6.22875 14 7.806 14.6502 9 15.719M9 5.0315C10.2363 3.92246 11.8392 3.31013 13.5 3.3125C14.289 3.3125 15.0465 3.4475 15.75 3.6965V14.384C15.0273 14.129 14.2664 13.9992 13.5 14C11.8392 13.9977 10.2363 14.61 9 15.719M9 5.0315V15.719'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
