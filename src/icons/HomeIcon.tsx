/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function HomeIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} xmlns='http://www.w3.org/2000/svg' width={width ?? size ?? 33} height={height ?? size ?? 30} viewBox='0 0 33.111 33.111'>
            <title>{title}</title>
            <g transform='translate(3.449 2.764)'>
                <path
                    id='Home-2'
                    data-name='Home'
                    d='M5.41,27.372A5.422,5.422,0,0,1,0,21.96V10.972A4.173,4.173,0,0,1,1.619,7.732l1-.744A1.08,1.08,0,0,1,3.863,8.7l-.971.72a2.027,2.027,0,0,0-.733,1.547V21.949A3.262,3.262,0,0,0,5.41,25.187h5.519v.025a1.08,1.08,0,0,1,0,2.159ZM18.1,27.359a2.627,2.627,0,0,1-2.627-2.615V19.778a.7.7,0,0,0-.7-.7h-3.6a.7.7,0,0,0-.7.708v1.895a1.08,1.08,0,1,1-2.159,0V19.79a2.87,2.87,0,0,1,2.867-2.868h3.6a2.868,2.868,0,0,1,2.856,2.868v4.954a.455.455,0,0,0,.456.456h2.458A3.239,3.239,0,0,0,23.8,21.96V10.972a2.029,2.029,0,0,0-.767-1.56L14.744,2.8a2.831,2.831,0,0,0-3.6,0L8.482,4.793A1.1,1.1,0,1,1,7.2,3.006L9.825,1.1a4.979,4.979,0,0,1,6.238,0l8.291,6.611a4.21,4.21,0,0,1,1.571,3.239l-.011,11a5.411,5.411,0,0,1-5.411,5.41Z'
                    stroke={color ?? 'currentColor'}
                    fill={color ?? 'currentColor'}
                />
            </g>
        </svg>
    );
}
