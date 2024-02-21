/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/hooks/SvgIcon';

export function CheckIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 9} height={height ?? size ?? 9} viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.46702 0.72696C8.75592 0.91586 8.83702 1.3032 8.64812 1.5921L4.39811 8.09212C4.29795 8.24532 4.13568 8.34682 3.95414 8.37002C3.77259 8.39322 3.59001 8.33562 3.45458 8.21252L0.704582 5.71253C0.449172 5.48034 0.430352 5.08506 0.662542 4.82965C0.894732 4.57424 1.29001 4.55541 1.54542 4.78761L3.75304 6.79453L7.60192 0.908039C7.79082 0.619139 8.17812 0.53807 8.46702 0.72696Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
