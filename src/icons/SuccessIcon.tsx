import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function SuccessIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 18} height={height ?? size ?? 18} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <path
                d='M18 9C18 10.1819 17.7672 11.3522 17.3149 12.4442C16.8626 13.5361 16.1997 14.5282 15.364 15.364C14.5282 16.1997 13.5361 16.8626 12.4442 17.3149C11.3522 17.7672 10.1819 18 9 18C7.8181 18 6.64778 17.7672 5.55585 17.3149C4.46392 16.8626 3.47177 16.1997 2.63604 15.364C1.80031 14.5282 1.13738 13.5361 0.685084 12.4442C0.232792 11.3522 -1.76116e-08 10.1819 0 9C3.55683e-08 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9Z'
                fill='#06B7A2'
            />
            <path d='M5.14282 9.25714L8.22854 12.3429L13.3714 5.14285' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
}
