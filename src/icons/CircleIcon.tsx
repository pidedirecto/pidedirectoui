/**
 * @prettier
 */
import * as React from 'react';

export function CircleIcon({ color, width, height, title, size }: Props): React.ReactElement {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={width ?? size ?? 30} height={height ?? size ?? 30} viewBox='0 0 30 30' fill='none'>
            {title && <title>{title}</title>}
            <circle cx='15' cy='15' r='14.5' stroke={color ?? 'currentColor'} />
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
