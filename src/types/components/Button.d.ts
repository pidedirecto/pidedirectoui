import * as React from "react";

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    variant?: 'secondary' | 'outline' | 'text' | 'icon';
    size?: 'large';
    classes?: {
        button?: string;
    },
    children: React.ReactNode
}

export type Button = React.FunctionComponent<ButtonProps>
