import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function CellPhoneIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 24} height={height ?? size ?? 26} viewBox='0 0 24 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M14.4018 10.2116C13.8831 9.69293 12.9697 9.33215 12.1302 9.30956M12.1302 9.30956C11.1314 9.28268 10.2372 9.73455 10.2372 10.9688C10.2372 13.2404 14.4018 12.1046 14.4018 14.3762C14.4018 15.6718 13.2934 16.2285 12.1302 16.1867M12.1302 9.30956V7.94M9.85862 15.1334C10.3466 15.7841 11.254 16.1552 12.1302 16.1867M12.1302 16.1867V17.7836M10.3147 1.5H7.78664C7.11617 1.5 6.47316 1.75963 5.99906 2.22177C5.52497 2.68392 5.25862 3.31072 5.25862 3.96429V22.0357C5.25862 22.6893 5.52497 23.3161 5.99906 23.7782C6.47316 24.2404 7.11617 24.5 7.78664 24.5H16.2134C16.8838 24.5 17.5268 24.2404 18.0009 23.7782C18.475 23.3161 18.7414 22.6893 18.7414 22.0357V3.96429C18.7414 3.31072 18.475 2.68392 18.0009 2.22177C17.5268 1.75963 16.8838 1.5 16.2134 1.5H13.6853M10.3147 1.5V3.14286H13.6853V1.5M10.3147 1.5H13.6853M10.3147 22.0357H13.6853'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
