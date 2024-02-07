/**
 * @prettier
 */
import * as React from 'react';

export function UserIcon({ title, width, height, color, size }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 112} height={height ?? size ?? 112} viewBox='0 0 113 112' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}

            <path
                d='M69.5017 35.0769C69.5017 38.5451 68.1319 41.8713 65.6936 44.3237C63.2553 46.7761 59.9483 48.1538 56.5 48.1538C53.0517 48.1538 49.7447 46.7761 47.3064 44.3237C44.8681 41.8713 43.4983 38.5451 43.4983 35.0769C43.4983 31.6087 44.8681 28.2825 47.3064 25.8301C49.7447 23.3777 53.0517 22 56.5 22C59.9483 22 63.2553 23.3777 65.6936 25.8301C68.1319 28.2825 69.5017 31.6087 69.5017 35.0769ZM30.5 84.3089C30.6114 77.4473 33.3997 70.9047 38.2635 66.092C43.1273 61.2793 49.677 58.5821 56.5 58.5821C63.323 58.5821 69.8727 61.2793 74.7365 66.092C79.6003 70.9047 82.3886 77.4473 82.5 84.3089C74.3432 88.0707 65.4734 90.0122 56.5 89.9999C47.222 89.9999 38.4155 87.9634 30.5 84.3089Z'
                fill={color ?? 'currentColor'}
            />
            <rect x='2' y='1.5' width='109' height='109' rx='54.5' stroke={color ?? 'currentColor'} strokeWidth='3' />
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
