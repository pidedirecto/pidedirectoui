/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function BankIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 22} height={height ?? size ?? 22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M11 21V11.8333M15.1667 21V11.8333M6.83333 21V11.8333M1 7.66667L11 1L21 7.66667M19.3333 21V9.14667C16.5766 8.71506 13.7904 8.49886 11 8.5C8.16556 8.5 5.38222 8.72222 2.66667 9.14667V21M1 21H21M11 5.16667H11.0089V5.17556H11V5.16667Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
