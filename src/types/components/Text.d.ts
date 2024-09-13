import * as React from 'react';
import { HTMLProps } from 'react';

export type TextProps = Omit<HTMLProps<HTMLSpanElement>, 'size'> &
    Omit<HTMLProps<HTMLHeadingElement>, 'size'> & {
        weight?: 'light' | 'medium' | 'bold' | 'semiBold' | 'regular';
        size?: 'small' | 'regular' | 'large' | 'extraLarge';
        variant?: 'title' | 'subtitle' | 'paragraph';
        children: React.ReactNode;
    };

export type Text = React.FunctionComponent<TextProps>;
