/**
 * @prettier
 */
import * as React from 'react';

export function OutlinedLightBulbIcon({ title, color, width, height, size }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 18} height={height ?? size ?? 24} viewBox='0 0 18 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}

            <path
                d='M9.00001 18V12.75M9.00001 12.75C9.50598 12.7504 10.01 12.6869 10.5 12.561M9.00001 12.75C8.49405 12.7504 7.99007 12.6869 7.50001 12.561M11.25 20.039C9.7633 20.3213 8.23673 20.3213 6.75001 20.039M10.5 22.422C9.50274 22.5264 8.49729 22.5264 7.50001 22.422M11.25 18V17.808C11.25 16.825 11.908 15.985 12.758 15.492C14.186 14.665 15.3014 13.3902 15.9314 11.865C16.5614 10.3399 16.6708 8.64948 16.2427 7.05582C15.8145 5.46217 14.8728 4.05419 13.5633 3.05006C12.2538 2.04594 10.6497 1.50171 8.99951 1.50171C7.34935 1.50171 5.74524 2.04594 4.43575 3.05006C3.12626 4.05419 2.18448 5.46217 1.75634 7.05582C1.32821 8.64948 1.43761 10.3399 2.0676 11.865C2.6976 13.3902 3.81301 14.665 5.24101 15.492C6.09101 15.985 6.75001 16.825 6.75001 17.808V18'
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
