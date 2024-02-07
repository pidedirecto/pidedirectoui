/**
 * @prettier
 */
import * as React from 'react';

export function DishIcon({ title, color, width, height, size }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 90} height={height ?? size ?? 91} viewBox='10 10 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M45.6968 65.5C56.1092 65.5 64.5501 56.9934 64.5501 46.5C64.5501 36.0066 56.1092 27.5 45.6968 27.5C35.2844 27.5 26.8435 36.0066 26.8435 46.5C26.8435 56.9934 35.2844 65.5 45.6968 65.5Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M45.6968 57.5C51.725 57.5 56.6118 52.5751 56.6118 46.5C56.6118 40.4249 51.725 35.5 45.6968 35.5C39.6686 35.5 34.7817 40.4249 34.7817 46.5C34.7817 52.5751 39.6686 57.5 45.6968 57.5Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M74.4728 47.7V61.5C74.4728 62.0304 74.2638 62.5391 73.8916 62.9142C73.5194 63.2893 73.0146 63.5 72.4883 63.5C71.9619 63.5 71.4572 63.2893 71.085 62.9142C70.7128 62.5391 70.5037 62.0304 70.5037 61.5V47.6M19.8976 25.5V35'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M74.4729 47.7V25.5C72.8149 25.5 71.2248 26.1637 70.0525 27.3452C68.8801 28.5267 68.2215 30.1291 68.2215 31.8V44.5C68.2215 44.9202 68.3036 45.3363 68.4632 45.7246C68.6228 46.1128 68.8567 46.4656 69.1515 46.7627C69.4464 47.0599 69.7964 47.2956 70.1817 47.4564C70.5669 47.6172 70.9798 47.7 71.3968 47.7H74.4729ZM24.3628 38.2L23.6682 25.5H16.1269L15.5315 38.2C15.4933 38.9657 15.7056 39.7229 16.1359 40.3552C16.5661 40.9876 17.1905 41.46 17.913 41.7V61.5C17.913 62.0304 18.1221 62.5391 18.4943 62.9142C18.8664 63.2893 19.3712 63.5 19.8976 63.5C20.4239 63.5 20.9287 63.2893 21.3009 62.9142C21.673 62.5391 21.8821 62.0304 21.8821 61.5V41.6C22.6064 41.3825 23.2404 40.9328 23.6881 40.3192C24.1358 39.7056 24.3727 38.9616 24.3628 38.2Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <rect x='0.5' y='1' width='89' height='89' rx='44.5' stroke='#CBF7E9' />
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
