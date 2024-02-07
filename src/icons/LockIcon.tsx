/**
 * @prettier
 */
import * as React from 'react';

export function LockIcon({ title, width, height, color, size }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 18} height={height ?? size ?? 22} viewBox='0 0 18 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 0.5C7.60761 0.5 6.27226 1.05312 5.28769 2.03769C4.30312 3.02226 3.75 4.35761 3.75 5.75V8.75C2.95435 8.75 2.19129 9.06607 1.62868 9.62868C1.06607 10.1913 0.75 10.9544 0.75 11.75V18.5C0.75 19.2956 1.06607 20.0587 1.62868 20.6213C2.19129 21.1839 2.95435 21.5 3.75 21.5H14.25C15.0456 21.5 15.8087 21.1839 16.3713 20.6213C16.9339 20.0587 17.25 19.2956 17.25 18.5V11.75C17.25 10.9544 16.9339 10.1913 16.3713 9.62868C15.8087 9.06607 15.0456 8.75 14.25 8.75V5.75C14.25 2.85 11.9 0.5 9 0.5ZM12.75 8.75V5.75C12.75 4.75544 12.3549 3.80161 11.6517 3.09835C10.9484 2.39509 9.99456 2 9 2C8.00544 2 7.05161 2.39509 6.34835 3.09835C5.64509 3.80161 5.25 4.75544 5.25 5.75V8.75H12.75Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}

type Props = {
    title?: string;
    color?: string;
    width?: number;
    height?: number;
    size?: number;
};
