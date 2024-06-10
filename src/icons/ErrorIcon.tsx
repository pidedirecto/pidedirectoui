/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function ErrorIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 91} height={height ?? size ?? 90} viewBox='0 0 91 90' fill={color ?? 'currentColor'} xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <circle cx='45.5' cy='45' r='45' fill={color || 'currentColor'} />
            <path
                d='M74.8913 44.6957C74.8913 48.464 74.1491 52.1955 72.707 55.677C71.2649 59.1585 69.1512 62.3219 66.4865 64.9866C63.8219 67.6512 60.6585 69.7649 57.177 71.207C53.6955 72.6491 49.964 73.3913 46.1957 73.3913C42.4273 73.3913 38.6958 72.6491 35.2143 71.207C31.7328 69.7649 28.5694 67.6512 25.9048 64.9866C23.2401 62.3219 21.1264 59.1585 19.6843 55.677C18.2422 52.1955 17.5 48.464 17.5 44.6957C17.5 37.0851 20.5233 29.7863 25.9048 24.4048C31.2862 19.0233 38.5851 16 46.1957 16C53.8062 16 61.1051 19.0233 66.4865 24.4048C71.868 29.7863 74.8913 37.0851 74.8913 44.6957Z'
                fill={color || 'currentColor'}
            />
            <path d='M36.5 36L54.5 54M54.5 36L36.5 54' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
