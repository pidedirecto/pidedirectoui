import * as React from 'react';
import { ButtonProps } from 'src/types/components/Button';

export type DropDownProps = {
    content: React.ReactNode;
    variant?: 'secondary' | 'outline' | 'text' | 'icon';
    position?: 'right' | 'left';
    id?: string;
    disabled?: boolean;
    preventClose?: boolean;
    children: React.ReactNode;
    badge?: ButtonProps['badge'];
    onOpen?: () => void;
    classes?: {
        container?: string;
        button?: string;
        dropdown?: string;
    };
};

export type DropDown = React.FunctionComponent<DropDownProps>;
