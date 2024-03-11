/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function XmlFileIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 16} height={height ?? size ?? 12} viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M2.28125 2.8125L3.09375 4.71094L3.86719 2.8125H5.12891L3.75781 5.62891L5.15625 8.5H3.84375L3.03516 6.55859L2.22656 8.5H0.941406L2.36328 5.60547L0.972656 2.8125H2.28125ZM6.15625 2.8125H7.16016L8.32031 6.70312L9.47656 2.8125H10.3633L8.74609 8.5H7.89062L6.15625 2.8125ZM5.75 2.8125H6.70703L6.85547 6.5625V8.5H5.75V2.8125ZM9.92578 2.8125H10.8867V8.5H9.78516V6.5625L9.92578 2.8125ZM14.9766 7.55469V8.5H12.6133V7.55469H14.9766ZM12.9648 2.8125V8.5H11.8203V2.8125H12.9648Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
