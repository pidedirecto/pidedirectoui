/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function PrinterIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 40} height={height ?? size ?? 40} viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M10 0C7.24219 0 5 2.24219 5 5V12.5H10V5H27.7109L30 7.28906V12.5H35V7.28906C35 5.96094 34.4766 4.6875 33.5391 3.75L31.25 1.46094C30.3125 0.523438 29.0391 0 27.7109 0H10ZM30 27.5V30V35H10V30V28.75V27.5H30ZM35 30H37.5C38.8828 30 40 28.8828 40 27.5V20C40 17.2422 37.7578 15 35 15H5C2.24219 15 0 17.2422 0 20V27.5C0 28.8828 1.11719 30 2.5 30H5V35C5 37.7578 7.24219 40 10 40H30C32.7578 40 35 37.7578 35 35V30ZM33.75 19.375C34.2473 19.375 34.7242 19.5725 35.0758 19.9242C35.4275 20.2758 35.625 20.7527 35.625 21.25C35.625 21.7473 35.4275 22.2242 35.0758 22.5758C34.7242 22.9275 34.2473 23.125 33.75 23.125C33.2527 23.125 32.7758 22.9275 32.4242 22.5758C32.0725 22.2242 31.875 21.7473 31.875 21.25C31.875 20.7527 32.0725 20.2758 32.4242 19.9242C32.7758 19.5725 33.2527 19.375 33.75 19.375Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
