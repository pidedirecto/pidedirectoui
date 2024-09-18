import * as React from 'react';

export type ChipProps = {
    disabled?: boolean;
    children: React.Node;
    onClick?: Function;
    classes?: { chip: string };
    variant?: 'error' | 'error-contrast' | 'warning' | 'warning-contrast' | 'success' | 'success-contrast' | 'info' | 'info-contrast' | 'secondary';
    style?: React.CSSProperties;
};

export type Chip = React.FunctionComponent<ChipProps>;
