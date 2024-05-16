/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function CashOutline({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 35} height={width ?? size ?? 36} viewBox='0 0 35 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='17.5' cy='18' r='17.5' fill='#F1F1F1' />
            <title>{title}</title>
            <path
                d='M7 23.2778V12.3889C7 12.1741 7.3134 12 7.7 12H27.3C27.6866 12 28 12.1741 28 12.3889V23.2778C28 23.4926 27.6866 23.6667 27.3 23.6667H7.7C7.3134 23.6667 7 23.4926 7 23.2778Z'
                stroke={color ?? 'currentColor'}
            />
            <path
                d='M19.4445 15.5C19.0005 15.056 18.2186 14.7472 17.5 14.7279M17.5 14.7279C16.645 14.7049 15.8796 15.0917 15.8796 16.1482C15.8796 18.0926 19.4445 17.1204 19.4445 19.0648C19.4445 20.1738 18.4957 20.6503 17.5 20.6145M17.5 14.7279V13.5556M15.5556 19.713C15.9733 20.2699 16.75 20.5876 17.5 20.6145M17.5 20.6145V21.9815'
                stroke={color ?? 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <circle cx='24.1111' cy='18.2222' r='0.777778' fill='#616B79' />
            <circle cx='10.8889' cy='18.2222' r='0.777778' fill='#616B79' />
        </svg>
    );
}
