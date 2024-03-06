/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function LitreIcon({ width, height, title, color, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 22} height={height ?? size ?? 21} viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <circle cx='11' cy='3' r='2.25' stroke={color ?? 'currentColor'} strokeWidth='1.5' />
            <path
                d='M3.12537 8.40106C3.41359 6.8639 4.75576 5.75 6.31971 5.75H15.6803C17.2442 5.75 18.5864 6.8639 18.8746 8.40106L20.3746 16.4011C20.7496 18.4012 19.2152 20.25 17.1803 20.25H4.81971C2.78476 20.25 1.25035 18.4012 1.62537 16.4011L3.12537 8.40106Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
            />
            <path
                d='M10.0079 9.08V15H8.88794V9.08H10.0079ZM12.4185 11.488V13.632C12.4185 13.7813 12.4532 13.8907 12.5225 13.96C12.5972 14.024 12.7198 14.056 12.8905 14.056H13.4105V15H12.7065C11.7625 15 11.2905 14.5413 11.2905 13.624V11.488H10.7625V10.568H11.2905V9.472H12.4185V10.568H13.4105V11.488H12.4185Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
