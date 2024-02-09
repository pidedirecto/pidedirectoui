/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function BarChartIcon({ title, width, height, color, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 24} height={height ?? size ?? 22} fill='none' viewBox='0 0 24 22' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M5.09091 12.9545V15.4091M8.36364 10.5V15.4091M11.6364 8.04545V15.4091M14.9091 5.59091V15.4091M3.45455 19.5H16.5455C17.1964 19.5 17.8208 19.2414 18.2811 18.7811C18.7414 18.3208 19 17.6964 19 17.0455V3.95455C19 3.30356 18.7414 2.67924 18.2811 2.21892C17.8208 1.7586 17.1964 1.5 16.5455 1.5H3.45455C2.80356 1.5 2.17924 1.7586 1.71892 2.21892C1.2586 2.67924 1 3.30356 1 3.95455V17.0455C1 17.6964 1.2586 18.3208 1.71892 18.7811C2.17924 19.2414 2.80356 19.5 3.45455 19.5Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
