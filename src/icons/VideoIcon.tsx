/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function VideoIcon({ color, title, width, size, height }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 24} height={height ?? size ?? 20} viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M1 19H23.1538M1.92308 15.7692H22.2308C22.7406 15.7692 23.1538 15.356 23.1538 14.8462V1.92308C23.1538 1.41328 22.7406 1 22.2308 1H1.92308C1.41328 1 1 1.41328 1 1.92308V14.8462C1 15.356 1.41328 15.7692 1.92308 15.7692ZM10.4615 5.23199V11.5372C10.4615 11.9022 10.8651 12.1228 11.1723 11.9257L16.0867 8.77309C16.3698 8.59148 16.3698 8.17775 16.0867 7.99614L11.1723 4.84352C10.8651 4.64646 10.4615 4.86704 10.4615 5.23199Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
            />
        </svg>
    );
}
