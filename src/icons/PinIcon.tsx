/**
 * @prettier
 */
import * as React from 'react';

export function PinIcon({ title, color, width, height, size }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 14} height={height ?? size ?? 14} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.58204 0.180775C8.82309 -0.0602588 9.21383 -0.0602576 9.45491 0.180775L10.7642 1.49006L12.5099 3.23578L13.8192 4.54507C14.0602 4.78611 14.0602 5.1769 13.8192 5.41793C13.5782 5.65896 13.1874 5.65896 12.9463 5.41793L12.1402 4.61185L7.65127 10.5972L9.01848 11.9644C9.2595 12.2054 9.2595 12.5963 9.01848 12.8372C8.77745 13.0783 8.38665 13.0783 8.14562 12.8372L6.3999 11.0915L5.09061 9.78224L1.05364 13.8192C0.812606 14.0603 0.421804 14.0603 0.180773 13.8192C-0.0602577 13.5782 -0.0602577 13.1874 0.180773 12.9463L4.21775 8.90937L2.90846 7.60008L1.16275 5.85436C0.921715 5.61333 0.921703 5.22254 1.16275 4.98151C1.40378 4.74047 1.79457 4.74047 2.0356 4.98151L3.40281 6.34871L9.38813 1.85972L8.58204 1.05364C8.34101 0.812607 8.34101 0.421805 8.58204 0.180775Z'
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
