/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function ChainCircleIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 35} height={height ?? size ?? 35} viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <rect width='35' height='35' rx='17.5' fill='#F1F1F1' />
            <path
                d='M18.5374 14.6126C19.1039 14.8831 19.5973 15.2856 19.976 15.7863C20.3547 16.2869 20.6077 16.8712 20.7138 17.4899C20.8199 18.1087 20.7759 18.7438 20.5856 19.3421C20.3953 19.9403 20.0643 20.4841 19.6202 20.9279L15.6971 24.851C14.9614 25.5867 13.9636 26 12.9231 26C11.8826 26 10.8848 25.5867 10.149 24.851C9.41332 24.1152 9 23.1174 9 22.0769C9 21.0364 9.41332 20.0386 10.149 19.3029L11.6808 17.7711M23.3192 17.2289L24.851 15.6971C25.5867 14.9614 26 13.9636 26 12.9231C26 11.8826 25.5867 10.8848 24.851 10.149C24.1152 9.41332 23.1174 9 22.0769 9C21.0364 9 20.0386 9.41332 19.3029 10.149L15.3798 14.0721C14.9357 14.5159 14.6047 15.0597 14.4144 15.6579C14.2241 16.2562 14.1801 16.8913 14.2862 17.5101C14.3923 18.1288 14.6453 18.7131 15.024 19.2137C15.4027 19.7144 15.8961 20.1169 16.4626 20.3874'
                stroke={color ?? 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
