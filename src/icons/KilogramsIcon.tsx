/**
 * @prettier
 */
import * as React from 'react';
import { SvgIconProps } from 'src/types/SvgIcon';

export function KilogramsIcon({ width, height, title, color, size }: SvgIconProps): React.ReactElement {
    return (
        <svg width={width ?? size ?? 22} height={height ?? size ?? 21} viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {title && <title>{title}</title>}
            <circle cx='11' cy='3' r='2.25' stroke='#06B7A2' strokeWidth='1.5' />
            <path
                d='M3.12537 8.40106C3.41359 6.8639 4.75576 5.75 6.31971 5.75H15.6803C17.2442 5.75 18.5864 6.8639 18.8746 8.40106L20.3746 16.4011C20.7496 18.4012 19.2152 20.25 17.1803 20.25H4.81971C2.78476 20.25 1.25035 18.4012 1.62537 16.4011L3.12537 8.40106Z'
                stroke={color ?? 'currentColor'}
                strokeWidth='1.5'
            />
            <path
                d='M9.62913 15L8.12513 13.112V15H7.00513V9.08H8.12513V12.448L9.61313 10.568H11.0691L9.11713 12.792L11.0851 15H9.62913ZM13.413 10.496C13.7437 10.496 14.0343 10.5627 14.285 10.696C14.5357 10.824 14.733 10.992 14.877 11.2V10.568H16.005V15.032C16.005 15.4427 15.9223 15.808 15.757 16.128C15.5917 16.4533 15.3437 16.7093 15.013 16.896C14.6823 17.088 14.2823 17.184 13.813 17.184C13.1837 17.184 12.6663 17.0373 12.261 16.744C11.861 16.4507 11.6343 16.0507 11.581 15.544H12.693C12.7517 15.7467 12.877 15.9067 13.069 16.024C13.2663 16.1467 13.5037 16.208 13.781 16.208C14.1063 16.208 14.3703 16.1093 14.573 15.912C14.7757 15.72 14.877 15.4267 14.877 15.032V14.344C14.733 14.552 14.533 14.7253 14.277 14.864C14.0263 15.0027 13.7383 15.072 13.413 15.072C13.0397 15.072 12.6983 14.976 12.389 14.784C12.0797 14.592 11.8343 14.3227 11.653 13.976C11.477 13.624 11.389 13.2213 11.389 12.768C11.389 12.32 11.477 11.9227 11.653 11.576C11.8343 11.2293 12.077 10.9627 12.381 10.776C12.6903 10.5893 13.0343 10.496 13.413 10.496ZM14.877 12.784C14.877 12.512 14.8237 12.28 14.717 12.088C14.6103 11.8907 14.4663 11.7413 14.285 11.64C14.1037 11.5333 13.909 11.48 13.701 11.48C13.493 11.48 13.301 11.5307 13.125 11.632C12.949 11.7333 12.805 11.8827 12.693 12.08C12.5863 12.272 12.533 12.5013 12.533 12.768C12.533 13.0347 12.5863 13.2693 12.693 13.472C12.805 13.6693 12.949 13.8213 13.125 13.928C13.3063 14.0347 13.4983 14.088 13.701 14.088C13.909 14.088 14.1037 14.0373 14.285 13.936C14.4663 13.8293 14.6103 13.68 14.717 13.488C14.8237 13.2907 14.877 13.056 14.877 12.784Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}