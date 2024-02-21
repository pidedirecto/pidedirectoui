/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function CashBoxIcon({ width, height, color, title, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 15} height={height ?? size ?? 16} viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M0.536983 7.01187H14.3554M0.594944 6.90513L2.22349 5.28182C2.28345 5.22241 2.36391 5.18867 2.44786 5.18867H12.37C12.452 5.18867 12.5304 5.22039 12.5899 5.27679L14.2924 6.90412C14.3559 6.96504 14.3919 7.04913 14.3919 7.13775V13.7679C14.3919 14.4487 13.8442 15 13.1691 15H1.72278C1.04718 15 0.5 14.4482 0.5 13.7679V7.13372C0.5 7.04762 0.53398 6.96555 0.594944 6.90513ZM3.26039 1H11.6315C12.1292 1 12.5335 1.40734 12.5335 1.90883V5.18867H2.35892V1.90883C2.35892 1.40734 2.76268 1 3.26039 1ZM4.30126 2.18173H10.5911C10.7906 2.18173 10.9524 2.34471 10.9524 2.54577V3.65247C10.9524 3.85352 10.7906 4.01651 10.5911 4.01651H4.30126C4.10173 4.01651 3.93997 3.85352 3.93997 3.65247V2.54577C3.93997 2.34471 4.10173 2.18173 4.30126 2.18173Z'
                stroke={color || 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
