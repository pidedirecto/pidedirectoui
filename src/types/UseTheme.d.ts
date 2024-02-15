/**
 * @prettier
 */

export type ThemeProps = {
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
}

export type UseTheme = (ThemeProps) => void
