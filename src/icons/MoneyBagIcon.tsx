/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function MoneyBagIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 20} height={height ?? size ?? 20} viewBox='10 10 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title ?? <title>{title}</title>}
            <path
                d='M22 15H18L16.5188 12.7781C16.2969 12.4437 16.5344 12 16.9344 12H23.0656C23.4656 12 23.7031 12.4437 23.4812 12.7781L22 15ZM18 16H22C22.1187 16.0781 22.2531 16.1656 22.4062 16.2625C24.1781 17.3969 28 19.8406 28 25C28 26.6562 26.6562 28 25 28H15C13.3438 28 12 26.6562 12 25C12 19.8406 15.8219 17.3969 17.5938 16.2625C17.7438 16.1656 17.8812 16.0781 18 16ZM20.6281 19C20.6281 18.6531 20.3469 18.3719 20 18.3719C19.6531 18.3719 19.3719 18.6531 19.3719 19V19.1875C19.1969 19.225 19.0312 19.2781 18.875 19.3469C18.4062 19.5594 18.0031 19.9531 17.9031 20.525C17.8469 20.8438 17.8781 21.15 18.0094 21.4312C18.1406 21.7062 18.3438 21.9 18.55 22.0406C18.9125 22.2875 19.3906 22.4312 19.7562 22.5406L19.825 22.5625C20.2594 22.6938 20.5563 22.7938 20.7406 22.9281C20.8188 22.9844 20.8469 23.0281 20.8594 23.0562C20.8687 23.0812 20.8875 23.1375 20.8656 23.2656C20.8469 23.375 20.7875 23.4656 20.6156 23.5406C20.425 23.6219 20.1156 23.6625 19.7156 23.6C19.5281 23.5688 19.1937 23.4562 18.8969 23.3531C18.8281 23.3281 18.7625 23.3063 18.7 23.2875C18.3719 23.1781 18.0188 23.3562 17.9094 23.6844C17.8 24.0125 17.9781 24.3656 18.3063 24.475C18.3438 24.4875 18.3906 24.5031 18.4437 24.5219C18.6906 24.6063 19.0781 24.7375 19.375 24.8062V25C19.375 25.3469 19.6562 25.6281 20.0031 25.6281C20.35 25.6281 20.6313 25.3469 20.6313 25V24.8281C20.8 24.7969 20.9594 24.75 21.1125 24.6844C21.6031 24.475 22 24.0688 22.1 23.475C22.1562 23.15 22.1313 22.8406 22.0063 22.5562C21.8844 22.275 21.6875 22.0687 21.4781 21.9156C21.0969 21.6406 20.5938 21.4875 20.2156 21.3719L20.1906 21.3656C19.7469 21.2313 19.4469 21.1375 19.2562 21.0094C19.175 20.9531 19.15 20.9156 19.1438 20.9C19.1375 20.8906 19.1219 20.85 19.1406 20.7437C19.15 20.6844 19.2 20.5813 19.3969 20.4906C19.5969 20.4 19.9094 20.35 20.2906 20.4094C20.425 20.4313 20.85 20.5125 20.9688 20.5437C21.3031 20.6312 21.6438 20.4344 21.7344 20.1C21.825 19.7656 21.625 19.425 21.2906 19.3344C21.1531 19.2969 20.8406 19.2344 20.6344 19.1969V19H20.6281Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}