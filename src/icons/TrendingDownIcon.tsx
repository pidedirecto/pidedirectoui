/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function TrendingDownIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 19} height={height ?? size ?? 10} viewBox='0 0 19 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M13 8.00001C12.4469 8.00001 12 8.44689 12 9.00001C12 9.55314 12.4469 10 13 10H18C18.5531 10 19 9.55314 19 9.00001V4.00001C19 3.44689 18.5531 3.00001 18 3.00001C17.4469 3.00001 17 3.44689 17 4.00001V6.58439L11.7063 1.29376C11.3156 0.903137 10.6813 0.903137 10.2906 1.29376L7.00002 4.58439L2.70627 0.293762C2.31565 -0.0968628 1.68127 -0.0968628 1.29065 0.293762C0.900024 0.684387 0.900024 1.31876 1.29065 1.70939L6.29065 6.70939C6.68127 7.10001 7.31565 7.10001 7.70627 6.70939L11 3.41564L15.5844 8.00001H13Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
