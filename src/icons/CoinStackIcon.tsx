import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function CoinStackIcon({ color, width, height, title, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? '18'} height={height ?? size ?? '18'} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M6.33333 10.7778C6.33333 12.2507 8.72089 13.4444 11.6667 13.4444C14.6124 13.4444 17 12.2507 17 10.7778M6.33333 10.7778C6.33333 9.30489 8.72089 8.11111 11.6667 8.11111C14.6124 8.11111 17 9.30489 17 10.7778M6.33333 10.7778V14.3333C6.33333 15.8053 8.72089 17 11.6667 17C14.6124 17 17 15.8053 17 14.3333V10.7778M1 3.66667C1 4.61956 2.01689 5.49956 3.66667 5.976C5.31644 6.45244 7.35022 6.45244 9 5.976C10.6498 5.49956 11.6667 4.61956 11.6667 3.66667C11.6667 2.71378 10.6498 1.83378 9 1.35733C7.35022 0.880889 5.31644 0.880889 3.66667 1.35733C2.01689 1.83378 1 2.71378 1 3.66667ZM1 3.66667V12.5556C1 13.3449 1.68622 13.8444 2.77778 14.3333M1 8.11111C1 8.90045 1.68622 9.4 2.77778 9.88889'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
