/**
 * @prettier
 */
import * as React from 'react';

export function FoldersIcon({ width, height, color, title, size }: Props): React.ReactElement {
    return (
        <svg width={width ?? size ?? 21} height={height ?? size ?? 21} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='none'>
            {title && <title>{title}</title>}
            <path
                d='M6.75 3H9L10.5 4.5H14.25C14.6478 4.5 15.0294 4.65804 15.3107 4.93934C15.592 5.22064 15.75 5.60218 15.75 6V11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H6.75C6.35218 12.75 5.97064 12.592 5.68934 12.3107C5.40804 12.0294 5.25 11.6478 5.25 11.25V4.5C5.25 4.10218 5.40804 3.72064 5.68934 3.43934C5.97064 3.15804 6.35218 3 6.75 3Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12.75 12.75V14.25C12.75 14.6478 12.592 15.0294 12.3107 15.3107C12.0294 15.592 11.6478 15.75 11.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V7.5C2.25 7.10218 2.40804 6.72064 2.68934 6.43934C2.97064 6.15804 3.35218 6 3.75 6H5.25'
                stroke={color ?? 'currentColor'}
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}

type Props = {
    width?: number;
    height?: number;
    size?: number;
    color?: string;
    title?: string;
};
