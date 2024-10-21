import * as React from 'react';

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className', 'onClick'> & {
    onClick: (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void | Promise<void>;
    variant?: 'secondary' | 'outline' | 'text' | 'icon';
    size?: 'large';
    asDiv?: boolean;
    badge?: React.ReactNode;
    classes?: {
        button?: string;
    };
    children: React.ReactNode;
};

export type Button = React.FunctionComponent<ButtonProps>;
