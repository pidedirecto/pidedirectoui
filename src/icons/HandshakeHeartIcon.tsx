/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function HandshakeHeartIcon({ title, color, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 20} height={height ?? size ?? 20} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                d='M17.0875 10.5453L10.0079 17.557L2.9282 10.5453C2.46123 10.0909 2.09341 9.54475 1.84789 8.94121C1.60237 8.33766 1.48448 7.68982 1.50164 7.03847C1.51879 6.38713 1.67063 5.74639 1.94758 5.15661C2.22453 4.56683 2.6206 4.04077 3.11084 3.61158C3.60109 3.18239 4.17489 2.85935 4.79611 2.66281C5.41733 2.46627 6.07252 2.40049 6.72042 2.46961C7.36831 2.53872 7.99488 2.74123 8.56066 3.0644C9.12645 3.38756 9.61919 3.82437 10.0079 4.34732C10.3982 3.82817 10.8915 3.39517 11.4569 3.07544C12.0223 2.75571 12.6476 2.55612 13.2937 2.48916C13.9398 2.42221 14.5927 2.48933 15.2117 2.68633C15.8306 2.88333 16.4022 3.20596 16.8908 3.63403C17.3793 4.06211 17.7742 4.58641 18.0508 5.17412C18.3273 5.76184 18.4796 6.40031 18.4981 7.04959C18.5166 7.69886 18.4008 8.34496 18.1581 8.94745C17.9154 9.54994 17.5509 10.0958 17.0875 10.551M10.0079 4.34166L6.89942 7.4501C6.72246 7.62712 6.62304 7.86717 6.62304 8.11748C6.62304 8.36778 6.72246 8.60784 6.89942 8.78485L7.41199 9.29742C8.06332 9.94875 9.12055 9.94875 9.77188 9.29742L10.7158 8.35347C11.2791 7.79018 12.0431 7.47373 12.8397 7.47373C13.6363 7.47373 14.4003 7.79018 14.9636 8.35347L17.0875 10.4774M10.4798 13.3092L12.3678 15.1971M12.8397 10.9493L14.7276 12.8373'
                stroke={color ?? 'currentColor'}
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    );
}