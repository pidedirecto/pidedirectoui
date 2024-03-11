/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function OpenBoxIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 26} height={height ?? size ?? 20} viewBox='0 0 26 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M1.11707 8.72955H18.8836M1.19159 8.5923L3.28543 6.5052C3.36253 6.42881 3.46597 6.38543 3.57391 6.38543H16.331C16.4364 6.38543 16.5372 6.42622 16.6137 6.49872L18.8026 8.59101C18.8842 8.66934 18.9305 8.77745 18.9305 8.89139V17.4159C18.9305 18.2911 18.2263 19 17.3583 19H2.64167C1.77304 19 1.06952 18.2905 1.06952 17.4159V8.88621C1.06952 8.77551 1.11321 8.66999 1.19159 8.5923ZM4.6186 1H15.3814C16.0213 1 16.5411 1.52372 16.5411 2.16849V6.38544H3.45956V2.16849C3.45956 1.52372 3.97868 1 4.6186 1Z'
                stroke={color || 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
