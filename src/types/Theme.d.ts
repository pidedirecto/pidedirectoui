/**
 * @prettier
 */
import * as React from 'react'
import { Theme } from "src/types/Theme";

export type ThemeProps = {
    theme: {
        palette?: {
            primary?: {
                color?: string;
                border?: string;
            },
        };
        font?: {
            size?: {
                normal?: string;
                small?: string;
            },
            color?: {
                normal?: string;
                light?: string;
            }
        }
    },
}

export type Theme = React.FunctionComponentElement<ThemeProps>
