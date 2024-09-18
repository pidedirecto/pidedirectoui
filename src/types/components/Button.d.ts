import * as React from 'react';

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    variant?: 'secondary' | 'outline' | 'text' | 'icon';
    size?: 'large';
    badge?: React.ReactNode;
    classes?: {
        button?: string;
    };
    children: React.ReactNode;
};

export type Button = React.FunctionComponent<ButtonProps>;

type GetBadgePosition = (element: React.ReactElement) => Object;
