/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function WalletIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 24} height={height ?? size ?? 24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M17.625 7.5V4.125C17.625 3.82663 17.5065 3.54048 17.2955 3.32951C17.0845 3.11853 16.7984 3 16.5 3H5.24998C4.65325 3 4.08095 3.23705 3.65899 3.65901C3.23704 4.08097 2.99998 4.65326 2.99998 5.25M2.99998 5.25C2.99998 5.84674 3.23704 6.41903 3.65899 6.84099C4.08095 7.26295 4.65325 7.5 5.24998 7.5H18.75C19.0484 7.5 19.3345 7.61853 19.5455 7.82951C19.7565 8.04048 19.875 8.32663 19.875 8.625V12M2.99998 5.25V18.75C2.99998 19.3467 3.23704 19.919 3.65899 20.341C4.08095 20.7629 4.65325 21 5.24998 21H18.75C19.0484 21 19.3345 20.8815 19.5455 20.6705C19.7565 20.4595 19.875 20.1734 19.875 19.875V16.5M21 12V16.5H16.5C15.9033 16.5 15.331 16.2629 14.909 15.841C14.4871 15.419 14.25 14.8467 14.25 14.25C14.25 13.6533 14.4871 13.081 14.909 12.659C15.331 12.237 15.9033 12 16.5 12H21Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
