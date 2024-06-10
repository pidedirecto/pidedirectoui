/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function SuccessIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 90} height={height ?? size ?? 90} viewBox='0 0 90 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <circle cx='45' cy='45' r='45' fill={color || 'currentColor'} />
            <path
                d='M74.3478 44.3478C74.3478 48.1162 73.6056 51.8477 72.1635 55.3292C70.7214 58.8107 68.6077 61.9741 65.9431 64.6387C63.2784 67.3034 60.1151 69.4171 56.6335 70.8592C53.152 72.3013 49.4206 73.0435 45.6522 73.0435C41.8838 73.0435 38.1524 72.3013 34.6708 70.8592C31.1893 69.4171 28.0259 67.3034 25.3613 64.6387C22.6967 61.9741 20.583 58.8107 19.1409 55.3292C17.6988 51.8477 16.9565 48.1162 16.9565 44.3478C16.9565 36.7373 19.9798 29.4384 25.3613 24.0569C30.7428 18.6755 38.0416 15.6522 45.6522 15.6522C53.2628 15.6522 60.5616 18.6755 65.9431 24.0569C71.3246 29.4384 74.3478 36.7373 74.3478 44.3478Z'
                fill={color || 'currentColor'}
            />
            <path d='M36 45.5714L42.4286 52L53.1429 37' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
