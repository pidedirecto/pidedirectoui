/**
 * @prettier
 */
import * as React from 'react';

export function CalendarClockIcon({ color, title, width, height, size }: Props): React.ReactElement {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-calendar-clock'
            width={width ?? size ?? 24}
            height={height ?? size ?? 24}
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke={color ?? 'currentColor'}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            {title && <title>{title}</title>}
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3' />
            <path d='M16 3v4' />
            <path d='M8 3v4' />
            <path d='M4 11h10' />
            <path d='M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
            <path d='M18 16.5v1.5l.5 .5' />
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
