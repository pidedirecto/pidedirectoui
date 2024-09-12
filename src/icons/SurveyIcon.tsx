import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function SurveyIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} xmlns='http://www.w3.org/2000/svg' width={width ?? size ?? 30} height={height ?? size ?? 30} fill='none' viewBox='0 0 25 25'>
            {title && <title>{title}</title>}
            <g transform='translate(4.139 2.759)'>
                <path
                    d='M3.68002 10.8733L4.47722 11.8034C4.62888 11.9803 4.9026 11.9803 5.05426 11.8034L6.72002 9.86M8.24002 11.38H14.32M3.68002 14.6733L4.47722 15.6034C4.62888 15.7803 4.9026 15.7803 5.05426 15.6034L6.72002 13.66M8.24002 15.18H14.32M4.44002 4.92V1.5M9.00002 4.92V1.5M13.56 4.92V1.5M2.16002 20.5H15.84C16.2598 20.5 16.6 20.1597 16.6 19.74V3.78C16.6 3.36026 16.2598 3.02 15.84 3.02H2.16002C1.74029 3.02 1.40002 3.36026 1.40002 3.78V19.74C1.40002 20.1597 1.74029 20.5 2.16002 20.5Z'
                    stroke={color || 'currentColor'}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
        </svg>
    );
}
