/**
 * @prettier
 */
import * as React from 'react';

export function BoxIcon({ color, title, width, height, size }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 20} height={height ?? size ?? 21} viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M2.26339 1.6115L0 6.14275H9.28571V0.428467H4.18304C3.37054 0.428467 2.62946 0.888288 2.26339 1.6115ZM10.7143 6.14275H20L17.7366 1.6115C17.3705 0.888288 16.6295 0.428467 15.817 0.428467H10.7143V6.14275ZM20 7.57132H0V17.5713C0 19.1472 1.28125 20.4285 2.85714 20.4285H17.1429C18.7188 20.4285 20 19.1472 20 17.5713V7.57132Z'
                fill={color ?? 'currentColor'}
            />
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
