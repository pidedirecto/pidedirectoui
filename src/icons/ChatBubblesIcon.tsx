import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function ChatBubblesIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 21} height={height ?? size ?? 20} viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <path
                d='M18.75 6.511C19.634 6.795 20.25 7.639 20.25 8.608V12.894C20.25 14.03 19.403 14.994 18.27 15.087C17.93 15.114 17.59 15.139 17.25 15.159V18.25L14.25 15.25C12.896 15.25 11.556 15.195 10.23 15.087C9.94133 15.0637 9.66053 14.9813 9.405 14.845M18.75 6.511C18.5955 6.46127 18.4358 6.42939 18.274 6.416C15.5959 6.19368 12.9041 6.19368 10.226 6.416C9.095 6.51 8.25 7.473 8.25 8.608V12.894C8.25 13.731 8.71 14.474 9.405 14.845M18.75 6.511V4.637C18.75 3.016 17.598 1.611 15.99 1.402C13.9208 1.13379 11.8365 0.999513 9.75 1C7.635 1 5.552 1.137 3.51 1.402C1.902 1.611 0.75 3.016 0.75 4.637V10.863C0.75 12.484 1.902 13.889 3.51 14.098C4.087 14.173 4.667 14.238 5.25 14.292V19L9.405 14.845'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
