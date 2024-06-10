/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function ErrorIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 91} height={height ?? size ?? 90} fill='none' xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <circle cx='45' cy='45' r='45' fill='#F3CCD5' />
            <path
                d='M74.3913 44.6957C74.3913 48.464 73.6491 52.1955 72.207 55.677C70.7649 59.1585 68.6512 62.3219 65.9865 64.9866C63.3219 67.6512 60.1585 69.7649 56.677 71.207C53.1955 72.6491 49.464 73.3913 45.6957 73.3913C41.9273 73.3913 38.1958 72.6491 34.7143 71.207C31.2328 69.7649 28.0694 67.6512 25.4048 64.9866C22.7401 62.3219 20.6264 59.1585 19.1843 55.677C17.7422 52.1955 17 48.464 17 44.6957C17 37.0851 20.0233 29.7863 25.4048 24.4048C30.7862 19.0233 38.0851 16 45.6957 16C53.3062 16 60.6051 19.0233 65.9865 24.4048C71.368 29.7863 74.3913 37.0851 74.3913 44.6957Z'
                fill='#E32F45'
            />
            <path d='M36 36L54 54M54 36L36 54' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
