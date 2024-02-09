/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function FlappyDiskIcon({ color, title, height, width, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 17} height={height ?? size ?? 17} viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M14.3333 16H2.66667C2.22464 16 1.80072 15.8244 1.48816 15.5118C1.17559 15.1993 1 14.7754 1 14.3333V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H11.8333L16 5.16667V14.3333C16 14.7754 15.8244 15.1993 15.5118 15.5118C15.1993 15.8244 14.7754 16 14.3333 16Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M12.6666 16V9.33334H4.33325V16' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M4.33325 1V5.16667H10.9999' stroke={color || 'currentColor'} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
