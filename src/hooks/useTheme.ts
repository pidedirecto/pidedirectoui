/**
 * @prettier
 */
import { useEffect, useRef } from 'react';
import { Theme } from 'src/types/hooks/UseTheme';

let initializedThemeId: number | undefined = undefined;
export function useTheme(theme?: Theme): ThemeResult {
    const themeId = useRef(Math.floor(Math.random() * Date.now()));

    useEffect(() => {
        initializeTheme();
    }, [theme]);

    const initializeTheme = () => {
        if (initializedThemeId && initializedThemeId !== themeId.current && !!theme) {
            console.warn('There are various instances of useTheme hook trying to set the app theme, this is not recommended and the previous theme values will be overwritten.');
        }

        initializedThemeId = themeId.current;

        const rootElement: HTMLElement = document.querySelector(':root') as any;
        if (!rootElement) return;

        if (theme?.palette?.surface?.primary) rootElement.style.setProperty('--surface-primary', theme.palette?.surface?.primary);
        if (theme?.palette?.surface?.secondary) rootElement.style.setProperty('--surface-secondary', theme.palette?.surface?.secondary);
        if (theme?.palette?.surface?.tertiary) rootElement.style.setProperty('--surface-tertiary', theme.palette?.surface?.tertiary);
        if (theme?.palette?.surface?.contrast) rootElement.style.setProperty('--surface-contrast', theme.palette?.surface?.contrast);
        if (theme?.palette?.surface?.heavyContrast) rootElement.style.setProperty('--surface-heavy-contrast', theme.palette?.surface?.heavyContrast);
        if (theme?.palette?.surface?.invert) rootElement.style.setProperty('--surface-invert', theme.palette?.surface?.invert);
        if (theme?.palette?.surface?.brand) rootElement.style.setProperty('--surface-brand', theme.palette?.surface?.brand);
        if (theme?.palette?.surface?.brandSecondary) rootElement.style.setProperty('--surface-brand-secondary', theme.palette?.surface?.brandSecondary);
        if (theme?.palette?.surface?.brandContrast) rootElement.style.setProperty('--surface-brand-contrast', theme.palette?.surface?.brandContrast);
        if (theme?.palette?.surface?.brandHeavyContrast) rootElement.style.setProperty('--surface-brand-heavy-contrast', theme.palette?.surface?.brandHeavyContrast);
        if (theme?.palette?.surface?.success) rootElement.style.setProperty('--surface-success', theme.palette?.surface?.success);
        if (theme?.palette?.surface?.info) rootElement.style.setProperty('--surface-info', theme.palette?.surface?.info);
        if (theme?.palette?.surface?.warning) rootElement.style.setProperty('--surface-warning', theme.palette?.surface?.warning);
        if (theme?.palette?.surface?.danger) rootElement.style.setProperty('--surface-warning', theme.palette?.surface?.danger);

        if (theme?.palette?.text?.primary) rootElement.style.setProperty('--text-primary', theme.palette?.text?.primary);
        if (theme?.palette?.text?.secondary) rootElement.style.setProperty('--text-secondary', theme.palette?.text?.secondary);
        if (theme?.palette?.text?.contrast) rootElement.style.setProperty('--text-contrast', theme.palette?.text?.contrast);
        if (theme?.palette?.text?.invert) rootElement.style.setProperty('--text-invert', theme.palette?.text?.invert);
        if (theme?.palette?.text?.brand) rootElement.style.setProperty('--text-brand', theme.palette?.text?.brand);
        if (theme?.palette?.text?.success) rootElement.style.setProperty('--text-success', theme.palette?.text?.success);
        if (theme?.palette?.text?.info) rootElement.style.setProperty('--text-info', theme.palette?.text?.info);
        if (theme?.palette?.text?.warning) rootElement.style.setProperty('--text-warning', theme.palette?.text?.warning);
        if (theme?.palette?.text?.danger) rootElement.style.setProperty('--text-danger', theme.palette?.text?.danger);

        if (theme?.palette?.border?.primary) rootElement.style.setProperty('--border-primary', theme.palette?.border?.primary);
        if (theme?.palette?.border?.secondary) rootElement.style.setProperty('--border-secondary', theme.palette?.border?.secondary);
        if (theme?.palette?.border?.tertiary) rootElement.style.setProperty('--border-tertiary', theme.palette?.border?.tertiary);
        if (theme?.palette?.border?.invert) rootElement.style.setProperty('--border-invert', theme.palette?.border?.invert);
        if (theme?.palette?.border?.brand) rootElement.style.setProperty('--border-brand', theme.palette?.border?.brand);
        if (theme?.palette?.border?.brandContrast) rootElement.style.setProperty('--border-brand-contrast', theme.palette?.border?.brandContrast);
        if (theme?.palette?.border?.success) rootElement.style.setProperty('--border-success', theme.palette?.border?.success);
        if (theme?.palette?.border?.info) rootElement.style.setProperty('--border-info', theme.palette?.border?.info);
        if (theme?.palette?.border?.warning) rootElement.style.setProperty('--border-warning', theme.palette?.border?.warning);
        if (theme?.palette?.border?.danger) rootElement.style.setProperty('--border-danger', theme.palette?.border?.danger);
        if (theme?.palette?.border?.brandOutline) rootElement.style.setProperty('--border-brand-outline', theme.palette?.border?.brandOutline);

        if (theme?.palette?.icon?.primary) rootElement.style.setProperty('--border-icon-primary', theme.palette?.icon?.primary);
        if (theme?.palette?.icon?.invert) rootElement.style.setProperty('--border-icon-invert', theme.palette?.icon?.invert);
        if (theme?.palette?.icon?.brand) rootElement.style.setProperty('--border-icon-brand', theme.palette?.icon?.brand);

        if (theme?.font?.size?.extraSmall) rootElement.style.setProperty('--font-size-extra-small', theme.font?.size?.extraSmall);
        if (theme?.font?.size?.small) rootElement.style.setProperty('--font-size-small', theme.font?.size?.small);
        if (theme?.font?.size?.normal) rootElement.style.setProperty('--font-size-regular', theme.font?.size?.normal);
        if (theme?.font?.size?.large) rootElement.style.setProperty('---font-size-large', theme.font?.size?.large);
        if (theme?.font?.size?.extraLarge) rootElement.style.setProperty('---font-size-extra-large', theme.font?.size?.extraLarge);
    };

    const getTheme = () => {
        const rootElement: HTMLElement = document.querySelector(':root') as any;
        if (!rootElement) {
            return emptyTheme;
        }

        const style = getComputedStyle(rootElement);

        const theme: ThemeResult = {
            palette: {
                surface: {
                    primary: style.getPropertyValue('--surface-primary'),
                    secondary: style.getPropertyValue('--surface-secondary'),
                    tertiary: style.getPropertyValue('--surface-tertiary'),
                    contrast: style.getPropertyValue('--surface-contrast'),
                    heavyContrast: style.getPropertyValue('--surface-heavy-contrast'),
                    invert: style.getPropertyValue('--surface-invert'),
                    brand: style.getPropertyValue('--surface-brand'),
                    brandSecondary: style.getPropertyValue('--surface-brand-secondary'),
                    brandContrast: style.getPropertyValue('--surface-brand-contrast'),
                    brandHeavyContrast: style.getPropertyValue('--surface-brand-heavy-contrast'),
                    success: style.getPropertyValue('--surface-success'),
                    info: style.getPropertyValue('--surface-info'),
                    warning: style.getPropertyValue('--surface-warning'),
                    danger: style.getPropertyValue('--surface-warning'),
                },
                text: {
                    primary: style.getPropertyValue('--text-primary'),
                    contrast: style.getPropertyValue('--text-secondary'),
                    secondary: style.getPropertyValue('--text-contrast'),
                    invert: style.getPropertyValue('--text-invert'),
                    brand: style.getPropertyValue('--text-brand'),
                    success: style.getPropertyValue('--text-success'),
                    info: style.getPropertyValue('--text-info'),
                    warning: style.getPropertyValue('--text-warning'),
                    danger: style.getPropertyValue('--text-danger'),
                },
                border: {
                    primary: style.getPropertyValue('--border-primary'),
                    secondary: style.getPropertyValue('--border-secondary'),
                    tertiary: style.getPropertyValue('--border-tertiary'),
                    invert: style.getPropertyValue('--border-invert'),
                    brand: style.getPropertyValue('--border-brand'),
                    brandContrast: style.getPropertyValue('--border-brand-contrast'),
                    success: style.getPropertyValue('--border-success'),
                    info: style.getPropertyValue('--border-info'),
                    warning: style.getPropertyValue('--border-warning'),
                    danger: style.getPropertyValue('--border-danger'),
                    brandOutline: style.getPropertyValue('--border-brand-outline'),
                },
                icon: {
                    primary: style.getPropertyValue('--border-icon-primary'),
                    invert: style.getPropertyValue('--border-icon-invert'),
                    brand: style.getPropertyValue('--border-icon-brand'),
                },
            },
            font: {
                size: {
                    extraSmall: style.getPropertyValue('--font-size-extra-small'),
                    small: style.getPropertyValue('--font-size-small'),
                    normal: style.getPropertyValue('--font-size-regular'),
                    large: style.getPropertyValue('--font-size-large'),
                    extraLarge: style.getPropertyValue('--font-size-extra-large'),
                },
            },
        };

        return theme;
    };

    return getTheme();
}

const emptyTheme = {
    palette: {
        surface: {
            primary: '',
            secondary: '',
            tertiary: '',
            contrast: '',
            heavyContrast: '',
            invert: '',
            brand: '',
            brandSecondary: '',
            brandContrast: '',
            brandHeavyContrast: '',
            success: '',
            info: '',
            warning: '',
            danger: '',
        },
        text: {
            primary: '',
            contrast: '',
            secondary: '',
            invert: '',
            brand: '',
            success: '',
            info: '',
            warning: '',
            danger: '',
        },
        border: {
            primary: '',
            secondary: '',
            tertiary: '',
            invert: '',
            brand: '',
            brandContrast: '',
            success: '',
            info: '',
            warning: '',
            danger: '',
            brandOutline: '',
        },
        icon: {
            primary: '',
            invert: '',
            brand: '',
        },
    },
    font: {
        size: {
            extraSmall: '',
            small: '',
            normal: '',
            large: '',
            extraLarge: '',
        },
    },
};

type RequiredFields<T> = {
    [K in keyof T]-?: RequiredFields<T[K]>; // Make all fields required
};

type ThemeResult = RequiredFields<Theme>;
