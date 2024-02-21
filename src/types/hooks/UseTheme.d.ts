/**
 * @prettier
 */

export type Theme = {
    palette?: {
        primary?: {
            color?: string;
            border?: string;
            disabled?: string;
        };
    };
    font?: {
        size?: {
            normal?: string;
            small?: string;
        };
        color?: {
            normal?: string;
            light?: string;
            disabled?: string;
            error?: string;
        };
    };
};

export type UseTheme = (theme: Theme) => void;
