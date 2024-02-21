/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function MapPinIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 15} height={height ?? size ?? 18} viewBox='0 0 15 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M10.16 7.4C10.16 8.07895 9.8903 8.7301 9.4102 9.21019C8.93011 9.69028 8.27896 9.96 7.60001 9.96C6.92105 9.96 6.26991 9.69028 5.78981 9.21019C5.30972 8.7301 5.04001 8.07895 5.04001 7.4C5.04001 6.72104 5.30972 6.0699 5.78981 5.5898C6.26991 5.10971 6.92105 4.84 7.60001 4.84C8.27896 4.84 8.93011 5.10971 9.4102 5.5898C9.8903 6.0699 10.16 6.72104 10.16 7.4Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M14 7.4C14 13.4945 7.60001 17 7.60001 17C7.60001 17 1.20001 13.4945 1.20001 7.4C1.20001 5.70261 1.8743 4.07475 3.07453 2.87452C4.27476 1.67428 5.90263 1 7.60001 1C9.2974 1 10.9253 1.67428 12.1255 2.87452C13.3257 4.07475 14 5.70261 14 7.4Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
