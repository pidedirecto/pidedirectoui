/**
 * @prettier
 */
import * as React from 'react';

export function EnvelopeIcon({ title, color, size, width, height }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 18} height={height ?? size ?? 14} viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M16.75 2.82691V11.1731C16.75 11.6474 16.5616 12.1023 16.2262 12.4377C15.8908 12.7731 15.4359 12.9615 14.9615 12.9615H3.03846C2.56413 12.9615 2.10923 12.7731 1.77383 12.4377C1.43843 12.1023 1.25 11.6474 1.25 11.1731V2.82691M16.75 2.82691C16.75 2.35258 16.5616 1.89768 16.2262 1.56228C15.8908 1.22688 15.4359 1.03845 14.9615 1.03845H3.03846C2.56413 1.03845 2.10923 1.22688 1.77383 1.56228C1.43843 1.89768 1.25 2.35258 1.25 2.82691M16.75 2.82691V3.02007C16.75 3.32541 16.6719 3.62568 16.523 3.89228C16.3741 4.15887 16.1595 4.3829 15.8995 4.54304L9.93795 8.21137C9.65593 8.38508 9.33122 8.47706 9 8.47706C8.66878 8.47706 8.34407 8.38508 8.06205 8.21137L2.10051 4.54384C1.84053 4.3837 1.62587 4.15966 1.47699 3.89307C1.32811 3.62648 1.24997 3.32621 1.25 3.02086V2.82691'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
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
