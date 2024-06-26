/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function ShieldFillIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 25} height={height ?? size ?? 26} viewBox='0 0 25 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <rect y='0.5' width='25' height='25' rx='12.5' fill={color || 'currentColor'} />
            <path
                d='M9.92748 13.6063L11.8569 15.5357L15.0727 11.0337M12.5001 5C10.5584 6.84391 7.97251 7.85525 5.29504 7.81788C4.95445 8.85549 4.78135 9.94073 4.78223 11.0328C4.78223 15.8282 8.06147 19.8569 12.5001 21C16.9387 19.8578 20.218 15.829 20.218 11.0337C20.218 9.91028 20.0379 8.82892 19.7052 7.81702H19.5748C16.8341 7.81702 14.3438 6.74681 12.5001 5Z'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
