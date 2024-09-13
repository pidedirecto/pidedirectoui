import * as React from 'react';
import { SvgIconProps } from 'src/types/icons/SvgIcon';

export function WithdrawIcon({ color, title, width, height, size, ...props }: SvgIconProps): React.ReactElement {
    return (
        <svg {...props} width={width ?? size ?? 289} height={height ?? size ?? 284} viewBox='0 0 289 284' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <title>{title}</title>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M35 0C15.67 0 0 15.67 0 35V183C0 202.33 15.67 218 35 218H106.5V208H35C21.1929 208 10 196.807 10 183V80H279V183C279 196.807 267.807 208 254 208H184.5V218H254C273.33 218 289 202.33 289 183V35C289 15.67 273.33 0 254 0H35ZM279 54V35C279 21.1929 267.807 10 254 10H35C21.1929 10 10 21.1929 10 35V54H279Z'
                fill={color ?? 'currentColor'}
            />
            <path d='M25 109C25 104.029 29.0294 100 34 100H192C196.971 100 201 104.029 201 109C201 113.971 196.971 118 192 118H34C29.0294 118 25 113.971 25 109Z' fill={color ?? 'currentColor'} />
            <path
                d='M148.536 282.536L180.355 250.716C182.308 248.763 182.308 245.597 180.355 243.645C178.403 241.692 175.237 241.692 173.284 243.645L150 266.929V160H140V266.929L116.716 243.645C114.763 241.692 111.597 241.692 109.645 243.645C107.692 245.597 107.692 248.763 109.645 250.716L141.464 282.536C143.417 284.488 146.583 284.488 148.536 282.536Z'
                fill={color ?? 'currentColor'}
            />
        </svg>
    );
}
