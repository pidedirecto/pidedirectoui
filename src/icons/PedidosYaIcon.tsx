import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function PedidosYaIcon({ title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width || '20'} height={height || '20'} viewBox={`0 0 41 41`} fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <circle cx='20' cy='20' r='19.25' fill='white' stroke='#ED2F42' strokeWidth='1.5' />
            <path
                d='M12.3106 12H24.3733C28.049 12 31 14.9653 31 18.6069C31 22.3006 27.9973 25.2659 24.3733 25.2659H18.2125L17.3324 28.5434C17.2289 29.0636 16.6594 30 15.5204 30H12.4659C12.3624 30 12.2589 29.948 12.2071 29.896C12.1553 29.8439 12.1553 29.7399 12.1553 29.6358L14.3815 20.5318C14.4332 20.4277 14.5368 20.3237 14.6921 20.3237H24.4251C25.3569 20.3237 26.0817 19.5954 26.0817 18.659C26.0817 17.7225 25.3569 16.9942 24.4251 16.9942H15.7793C13.346 16.9942 12 15.9538 12 14.0289V12.3121C12 12.104 12.1035 12 12.3106 12Z'
                fill='#ED2F42'
            />
        </svg>
    );
}
