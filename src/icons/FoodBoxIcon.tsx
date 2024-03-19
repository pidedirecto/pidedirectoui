/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function FoodBoxIcon({ width, height, title, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 90} height={height ?? size ?? 91} viewBox='0 0 90 91' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M25.2734 42.3474L29.9626 37.6733C30.1353 37.5022 30.3669 37.4051 30.6086 37.4051H59.1784C59.4144 37.4051 59.6403 37.4964 59.8115 37.6588L64.7137 42.3445C64.8964 42.52 65 42.7621 65 43.0172V62.1081C65 64.0682 63.423 65.6557 61.4791 65.6557H28.5209C26.5755 65.6557 25 64.0667 25 62.1081V43.0056C25 42.7577 25.0978 42.5214 25.2734 42.3474Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M25.1065 42.6548H64.895' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path
                d='M32.9482 25.3443H57.0518C58.4849 25.3443 59.6489 26.5172 59.6489 27.9612V37.4051H30.3525V27.9612C30.3525 26.5172 31.5166 25.3443 32.9497 25.3443H32.9482Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M54.0561 28.747H35.9453C35.3708 28.747 34.905 29.2163 34.905 29.7952V32.9818C34.905 33.5607 35.3708 34.03 35.9453 34.03H54.0561C54.6306 34.03 55.0964 33.5607 55.0964 32.9818V29.7952C55.0964 29.2163 54.6306 28.747 54.0561 28.747Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M52.8518 56.9135C52.8518 56.9135 51.8777 50.3561 45.0273 50.3561H44.9727C38.1237 50.3561 37.1482 56.9135 37.1482 56.9135'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M45 50.314C46.0132 50.314 46.8345 49.4864 46.8345 48.4655C46.8345 47.4447 46.0132 46.6171 45 46.6171C43.9868 46.6171 43.1655 47.4447 43.1655 48.4655C43.1655 49.4864 43.9868 50.314 45 50.314Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M43.8834 57.1077H35.3252C35.0935 57.1077 34.905 57.2977 34.905 57.5311V59.2288C34.905 60.3031 35.7698 61.1729 36.8345 61.1729H53.1971C54.246 61.1729 55.0964 60.3161 55.0964 59.2592V57.5311C55.0964 57.2977 54.9079 57.1077 54.6763 57.1077H50.3914'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M48.2863 57.1077H47.1381H46.0216' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
