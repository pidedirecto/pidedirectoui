/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function CashRegisterShiftIcon({ width, height, title, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 64} height={height ?? size ?? 63} viewBox='0 0 64 63' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M38.5 21.4262V25.3607M17.5 41.0984L20.5 32.2459M17.5 41.0984H47.5M17.5 41.0984V45.5246C17.5 46.3394 18.1716 47 19 47H46C46.8284 47 47.5 46.3394 47.5 45.5246V41.0984M20.5 32.2459H44.5M20.5 32.2459V27.3279C20.5 26.8061 20.7107 26.3058 21.0858 25.9368C21.4609 25.5679 21.9696 25.3607 22.5 25.3607H24.5M44.5 32.2459L47.5 41.0984M44.5 32.2459V27.3279C44.5 26.8061 44.2893 26.3058 43.9142 25.9368C43.5391 25.5679 43.0304 25.3607 42.5 25.3607H30.5M34.5 29.2951H40.5M24 38.1475H26M29 38.1475H31M34 38.1475H36M39 38.1475H41M26.5 35.1967H28.5M31.5 35.1967H33.5M36.5 35.1967H38.5M33 44.0492C33 44.3208 32.7761 44.541 32.5 44.541C32.2239 44.541 32 44.3208 32 44.0492C32 43.7776 32.2239 43.5574 32.5 43.5574C32.7761 43.5574 33 43.7776 33 44.0492ZM25.5 28.3115H29.5C30.0523 28.3115 30.5 27.8711 30.5 27.3279V22.4098C30.5 21.8666 30.0523 21.4262 29.5 21.4262H25.5C24.9477 21.4262 24.5 21.8666 24.5 22.4098V27.3279C24.5 27.8711 24.9477 28.3115 25.5 28.3115ZM35 21.4262H42C42.5523 21.4262 43 20.9859 43 20.4426V17.9836C43 17.4404 42.5523 17 42 17H35C34.4477 17 34 17.4404 34 17.9836V20.4426C34 20.9859 34.4477 21.4262 35 21.4262Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
                strokeLinecap='round'
            />
        </svg>
    );
}