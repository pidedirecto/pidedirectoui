/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function GridIcon({ title, width, height, color, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 13} height={height ?? size ?? 14} viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <mask id='path-1-inside-1_1319_249' fill={color ?? 'currentColor'}>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M1.5 0.5C0.67157 0.5 0 1.17157 0 2V12C0 12.8284 0.67157 13.5 1.5 13.5H11.5C12.3284 13.5 13 12.8284 13 12V2C13 1.17157 12.3284 0.5 11.5 0.5H1.5ZM7 1.5H11.5C11.7761 1.5 12 1.72386 12 2V6.5H7V1.5ZM7 7.5H12V12C12 12.2761 11.7761 12.5 11.5 12.5H7V7.5ZM6 1.5V6.5H1V2C1 1.72386 1.22386 1.5 1.5 1.5H6ZM1 12V7.5H6V12.5H1.5C1.22386 12.5 1 12.2761 1 12Z'
                />
            </mask>
            <path
                d='M7 1.5V-5.96046e-08H5.5V1.5H7ZM7 6.5H5.5V8H7V6.5ZM12 6.5V8H13.5V6.5H12ZM12 7.5H13.5V6H12V7.5ZM7 7.5V6H5.5V7.5H7ZM7 12.5H5.5V14H7V12.5ZM6 6.5V8H7.5V6.5H6ZM6 1.5H7.5V-5.96046e-08H6V1.5ZM1 6.5H-0.5V8H1V6.5ZM1 7.5V6H-0.5V7.5H1ZM6 12.5V14H7.5V12.5H6ZM6 7.5H7.5V6H6V7.5ZM11.5 -5.96046e-08H7V3H11.5V-5.96046e-08ZM5.5 1.5V6.5H8.5V1.5H5.5ZM7 8H12V5H7V8ZM13.5 6.5V2H10.5V6.5H13.5ZM13.5 2C13.5 0.895358 12.6045 -5.96046e-08 11.5 -5.96046e-08V3C10.9477 3 10.5 2.55236 10.5 2H13.5ZM12 6H7V9H12V6ZM5.5 7.5V12.5H8.5V7.5H5.5ZM7 14H11.5V11H7V14ZM11.5 14C12.6045 14 13.5 13.1045 13.5 12H10.5C10.5 11.4477 10.9477 11 11.5 11V14ZM13.5 12V7.5H10.5V12H13.5ZM7.5 6.5V1.5H4.5V6.5H7.5ZM6 -5.96046e-08H1.5V3H6V-5.96046e-08ZM1.5 -5.96046e-08C0.395433 -5.96046e-08 -0.5 0.895433 -0.5 2H2.5C2.5 2.55229 2.05229 3 1.5 3V-5.96046e-08ZM-0.5 2V6.5H2.5V2H-0.5ZM1 8H6V5H1V8ZM-0.5 7.5V12H2.5V7.5H-0.5ZM-0.5 12C-0.5 13.1045 0.395358 14 1.5 14V11C2.05236 11 2.5 11.4477 2.5 12H-0.5ZM1.5 14H6V11H1.5V14ZM7.5 12.5V7.5H4.5V12.5H7.5ZM6 6H1V9H6V6ZM1.5 -1C-0.156857 -1 -1.5 0.343143 -1.5 2H1.5L1.5 2V-1ZM-1.5 2V12H1.5V2H-1.5ZM-1.5 12C-1.5 13.6568 -0.156877 15 1.5 15V12H1.5H-1.5ZM1.5 15H11.5V12H1.5V15ZM11.5 15C13.1568 15 14.5 13.6568 14.5 12H11.5V15ZM14.5 12V2H11.5V12H14.5ZM14.5 2C14.5 0.343123 13.1568 -1 11.5 -1V2V2H14.5ZM11.5 -1H1.5V2H11.5V-1Z'
                fill={color ?? 'currentColor'}
                mask='url(#path-1-inside-1_1319_249)'
            />
        </svg>
    );
}