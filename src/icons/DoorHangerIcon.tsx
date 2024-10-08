import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function DoorHangerIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 10} height={height ?? size ?? 15} viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M2.09091 6.05556C1.80158 6.05556 1.5241 5.94142 1.31952 5.73825C1.11493 5.53509 1 5.25954 1 4.97222C1 3.91872 1.42143 2.90837 2.17157 2.16344C2.92172 1.4185 3.93913 1 5 1C6.06087 1 7.07828 1.4185 7.82843 2.16344C8.57857 2.90837 9 3.91872 9 4.97222V12.5556C9 12.9386 8.84675 13.306 8.57397 13.5769C8.30119 13.8478 7.93122 14 7.54545 14H2.45455C2.06878 14 1.69881 13.8478 1.42603 13.5769C1.15325 13.306 1 12.9386 1 12.5556V11.1111C1 10.1144 1.51636 9.346 2.36727 8.81806L5.58473 6.82111C6.352 6.34444 6.81818 5.87067 6.81818 4.97222C6.81818 4.49336 6.62662 4.03411 6.28565 3.6955C5.94467 3.35689 5.48221 3.16667 5 3.16667C4.51779 3.16667 4.05533 3.35689 3.71435 3.6955C3.37338 4.03411 3.18182 4.49336 3.18182 4.97222C3.18182 5.25954 3.06688 5.53509 2.8623 5.73825C2.65771 5.94142 2.38024 6.05556 2.09091 6.05556Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
