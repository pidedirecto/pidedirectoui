/**
 * @prettier
 */

export type Theme = {
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

export type UseTheme = (theme: Theme) => void
