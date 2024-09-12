

export type Theme = {
    palette?: {
        surface?: {
            primary?: string;
            secondary?: string;
            tertiary?: string;
            contrast?: string;
            heavyContrast?: string;
            invert?: string;
            brand?: string;
            brandSecondary?: string;
            brandContrast?: string;
            brandHeavyContrast?: string;
            success?: string;
            info?: string;
            warning?: string;
            danger?: string;
        };
        text?: {
            primary?: string;
            contrast?: string;
            secondary?: string;
            invert?: string;
            brand?: string;
            success?: string;
            info?: string;
            warning?: string;
            danger?: string;
        };
        border?: {
            primary?: string;
            secondary?: string;
            tertiary?: string;
            invert?: string;
            brand?: string;
            brandContrast?: string;
            success?: string;
            info?: string;
            warning?: string;
            danger?: string;
            brandOutline?: string;
        };
        icon?: {
            primary?: string;
            invert?: string;
            brand?: string;
        };
    };
    font?: {
        size?: {
            extraSmall?: string;
            small?: string;
            normal?: string;
            large?: string;
            extraLarge?: string;
        };
    };
};

export type UseTheme = (theme?: Theme) => Theme;
