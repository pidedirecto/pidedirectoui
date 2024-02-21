/**
 * @prettier
 */
import * as React from 'react';

export type SvgIconProps = {
    width?: number;
    height?: number;
    size?: number;
    color?: string;
    title?: string;
};

/**
 * Renders SVG icon
 */
export type SvgIcon = React.FunctionComponent<SvgIconProps>;
