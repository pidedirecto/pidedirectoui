/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function PdfIcon({ title, color, width, height, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 16} height={height ?? size ?? 12} viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <path
                d='M3.95703 6.49609H2.79297V5.54688H3.95703C4.11849 5.54688 4.25 5.51042 4.35156 5.4375C4.45573 5.36458 4.53125 5.26432 4.57812 5.13672C4.625 5.00651 4.64844 4.86068 4.64844 4.69922C4.64844 4.53516 4.6237 4.38281 4.57422 4.24219C4.52734 4.09896 4.45312 3.98307 4.35156 3.89453C4.2526 3.80599 4.12109 3.76172 3.95703 3.76172H3.16016V8.5H2.01953V2.8125H3.95703C4.33984 2.8125 4.66927 2.89323 4.94531 3.05469C5.22135 3.21615 5.43229 3.4388 5.57812 3.72266C5.72656 4.00391 5.80078 4.32682 5.80078 4.69141C5.80078 5.05859 5.72656 5.3776 5.57812 5.64844C5.43229 5.91667 5.22135 6.125 4.94531 6.27344C4.66927 6.42188 4.33984 6.49609 3.95703 6.49609ZM8.05078 8.5H7.04688L7.05469 7.55469H8.05078C8.32682 7.55469 8.54167 7.50521 8.69531 7.40625C8.84896 7.30729 8.95703 7.15104 9.01953 6.9375C9.08464 6.72396 9.11719 6.44401 9.11719 6.09766V5.21094C9.11719 4.94792 9.10026 4.72526 9.06641 4.54297C9.03255 4.35807 8.97526 4.20964 8.89453 4.09766C8.8138 3.98307 8.70573 3.89844 8.57031 3.84375C8.4349 3.78906 8.26693 3.76172 8.06641 3.76172H7.02734V2.8125H8.06641C8.39453 2.8125 8.69271 2.86589 8.96094 2.97266C9.22917 3.07943 9.45964 3.23568 9.65234 3.44141C9.84505 3.64453 9.99349 3.89583 10.0977 4.19531C10.2018 4.49479 10.2539 4.83594 10.2539 5.21875V6.09766C10.2539 6.48307 10.2018 6.82422 10.0977 7.12109C9.99349 7.41797 9.84505 7.66927 9.65234 7.875C9.46224 8.07812 9.23177 8.23307 8.96094 8.33984C8.6901 8.44661 8.38672 8.5 8.05078 8.5ZM7.71094 2.8125V8.5H6.56641V2.8125H7.71094ZM12.2344 2.8125V8.5H11.0898V2.8125H12.2344ZM14.0156 5.23047V6.17578H11.9453V5.23047H14.0156ZM14.2344 2.8125V3.76172H11.9453V2.8125H14.2344Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}