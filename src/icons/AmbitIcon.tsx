import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function AmbitIcon({ title, width, height, color, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 38} height={height ?? size ?? 38} viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {!!title && <title>{title}</title>}
            <rect x='1' y='1' width='36' height='36' rx='18' stroke='#8D25FF' strokeWidth='2' />
            <rect x='4.75' y='4.75' width='28.5' height='28.5' rx='14.25' fill='#8D25FF' />
            <rect x='4.75' y='4.75' width='28.5' height='28.5' rx='14.25' stroke='#8D25FF' strokeWidth='1.5' />
            <path
                d='M13.1703 19C13.1703 16.9574 14.2523 15.0142 15.9858 13.9322L16.1956 13.7997L15.1356 12.0883L14.9258 12.2208C12.6072 13.6672 11.1609 16.2618 11.1609 19C11.1609 21.8155 12.6624 24.4543 15.0915 25.8785L15.3012 26L16.328 24.2666L16.1183 24.1451C14.2855 23.0741 13.1703 21.0978 13.1703 19Z'
                fill='white'
            />
            <path
                d='M22.9195 12.1215L22.7097 12L21.6829 13.7334L21.8927 13.8549C23.7034 14.9259 24.8296 16.8912 24.8296 19C24.8296 21.0426 23.7476 22.9858 22.0142 24.0678L21.8044 24.2003L22.8643 25.9117L23.0741 25.7792C25.3927 24.3328 26.8391 21.7382 26.8391 19C26.8501 16.1845 25.3375 13.5457 22.9195 12.1215Z'
                fill='white'
            />
        </svg>
    );
}
