/**
 * @prettier
 */

export type Theme = {
    palette?: {
        primary?: {
            color?: string;
            hover?: string;
            outline?: string;
            border?: string;
            disabled?: string;
        };
        secondary?: {
            color?: string;
            hover?: string;
            outline?: string;
            border?: string;
            disabled?: string;
        };
        outline?: {
            color?: string;
            hover?: string;
            outline?: string;
            border?: string;
            disabled?: string;
        };
    };
    font?: {
        size?: {
            normal?: string;
            small?: string;
            large?: string;
        };
        color?: {
            normal?: string;
            light?: string;
            disabled?: string;
            error?: string;
            hover?: string;
        };
    };
};

export type UseTheme = (theme: Theme) => void;
