/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function CellphoneCircleIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 35} height={height ?? size ?? 35} viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <rect width='35' height='35' rx='17.5' fill='#F1F1F1' />
            <path
                d='M19.994 14.6046C19.4554 14.0661 18.5069 13.6914 17.6352 13.668M17.6352 13.668C16.5981 13.6401 15.6696 14.1093 15.6696 15.3909C15.6696 17.7496 19.994 16.5703 19.994 18.929C19.994 20.2743 18.8431 20.8523 17.6352 20.8089M17.6352 13.668V12.2459M15.2765 19.7153C15.7832 20.3909 16.7254 20.7762 17.6352 20.8089M17.6352 20.8089V22.4671M15.75 5.55882H13.125C12.4288 5.55882 11.7611 5.82841 11.2688 6.30828C10.7766 6.78816 10.5 7.439 10.5 8.11765V26.8824C10.5 27.561 10.7766 28.2118 11.2688 28.6917C11.7611 29.1716 12.4288 29.4412 13.125 29.4412H21.875C22.5712 29.4412 23.2389 29.1716 23.7312 28.6917C24.2234 28.2118 24.5 27.561 24.5 26.8824V8.11765C24.5 7.439 24.2234 6.78816 23.7312 6.30828C23.2389 5.82841 22.5712 5.55882 21.875 5.55882H19.25M15.75 5.55882V7.2647H19.25V5.55882M15.75 5.55882H19.25M15.75 26.8824H19.25'
                stroke={color ?? 'currentColor'}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
