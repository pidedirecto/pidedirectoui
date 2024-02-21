/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function TrendingUpIcon({ color, title, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 19} height={height ?? size ?? 10} viewBox='0 0 19 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M12.0033 2.00016C11.4501 2.00016 11.0032 1.55325 11.0032 1.00008C11.0032 0.44691 11.4501 0 12.0033 0H17.0037C17.5568 0 18.0037 0.44691 18.0037 1.00008V6.00047C18.0037 6.55364 17.5568 7.00055 17.0037 7.00055C16.4505 7.00055 16.0036 6.55364 16.0036 6.00047V3.41589L10.7094 8.70693C10.3188 9.09759 9.68435 9.09759 9.29369 8.70693L6.00281 5.41605L1.70873 9.70701C1.31807 10.0977 0.683647 10.0977 0.292992 9.70701C-0.0976639 9.31635 -0.0976639 8.68193 0.292992 8.29127L5.29338 3.29088C5.68404 2.90023 6.31846 2.90023 6.70912 3.29088L10.0031 6.58489L14.5879 2.00016H12.0033Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
