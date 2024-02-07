/**
 * @prettier
 */
import * as React from 'react';

export function FilledCircleIcon({ color, title, width, size, height }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 20} height={height ?? size ?? 20} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <circle cx='8' cy='8' r='7.5' fill={color ?? 'currentColor'} stroke={color ?? 'currentColor'} />
        </svg>
    );
}

type Props = {
    width?: number;
    height?: number;
    size?: number;
    color?: string;
    title?: string;
};
