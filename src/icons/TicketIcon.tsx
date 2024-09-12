import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function TicketIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} fill='none' xmlns='http://www.w3.org/2000/svg' width={width ?? size ?? 30} height={height ?? size ?? 30} viewBox='0 0 33.111 33.111'>
            {title && <title>{title}</title>}
            <g transform='translate(2.759 4.139)'>
                <path
                    d='M9.46154 17.25H22.1538C22.6212 17.25 23 16.8396 23 16.3333V13.5833C23 13.0771 22.6153 12.6784 22.1624 12.5535C20.6983 12.1497 19.6154 10.7119 19.6154 9C19.6154 7.28814 20.6983 5.85028 22.1624 5.44648C22.6153 5.32158 23 4.92293 23 4.41667V1.66667C23 1.16041 22.6212 0.75 22.1538 0.75H9.46154M9.46154 17.25H1.84615C1.37884 17.25 1 16.8396 1 16.3333V13.5833C1 13.0771 1.38472 12.6784 1.83759 12.5535C3.30174 12.1497 4.38462 10.7119 4.38462 9C4.38462 7.28814 3.30174 5.85028 1.83759 5.44648C1.38472 5.32158 1 4.92293 1 4.41667V1.66667C1 1.16041 1.37884 0.75 1.84615 0.75H9.46154M9.46154 17.25V0.75'
                    stroke={color ?? 'currentColor'}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
        </svg>
    );
}
