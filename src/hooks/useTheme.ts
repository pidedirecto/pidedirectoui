/**
 * @prettier
 */
import { useEffect, useRef } from 'react';
import { Theme } from 'src/types/hooks/UseTheme';

let initializedThemeId: number | undefined = undefined;
export function useTheme(theme: Theme): void {
    const themeId = useRef(Math.floor(Math.random() * Date.now()));

    useEffect(() => {
        initializeTheme();
    }, [theme]);

    const initializeTheme = () => {
        if (initializedThemeId && initializedThemeId !== themeId.current) {
            console.warn('There are various instances of useTheme hook this is not recommended and the previous theme values will be overwritten.');
        }

        initializedThemeId = themeId.current;

        const rootElement: HTMLElement = document.querySelector(':root') as any;
        if (!rootElement) return;

        if (theme.palette?.surface?.primary) rootElement.style.setProperty('--surface-primary', theme.palette?.surface?.primary);
        if (theme.palette?.surface?.secondary) rootElement.style.setProperty('--surface-secondary', theme.palette?.surface?.secondary);
        if (theme.palette?.surface?.tertiary) rootElement.style.setProperty('--surface-tertiary', theme.palette?.surface?.tertiary);
        if (theme.palette?.surface?.contrast) rootElement.style.setProperty('--surface-contrast', theme.palette?.surface?.contrast);
        if (theme.palette?.surface?.heavyContrast) rootElement.style.setProperty('--surface-heavy-contrast', theme.palette?.surface?.heavyContrast);
        if (theme.palette?.surface?.invert) rootElement.style.setProperty('--surface-invert', theme.palette?.surface?.invert);
        if (theme.palette?.surface?.brand) rootElement.style.setProperty('--surface-brand', theme.palette?.surface?.brand);
        if (theme.palette?.surface?.brandSecondary) rootElement.style.setProperty('--surface-brand-secondary', theme.palette?.surface?.brandSecondary);
        if (theme.palette?.surface?.brandContrast) rootElement.style.setProperty('--surface-brand-contrast', theme.palette?.surface?.brandContrast);
        if (theme.palette?.surface?.brandHeavyContrast) rootElement.style.setProperty('--surface-brand-heavy-contrast', theme.palette?.surface?.brandHeavyContrast);
        if (theme.palette?.surface?.success) rootElement.style.setProperty('--surface-success', theme.palette?.surface?.success);
        if (theme.palette?.surface?.info) rootElement.style.setProperty('--surface-info', theme.palette?.surface?.info);
        if (theme.palette?.surface?.warning) rootElement.style.setProperty('--surface-warning', theme.palette?.surface?.warning);
        if (theme.palette?.surface?.danger) rootElement.style.setProperty('--surface-warning', theme.palette?.surface?.danger);

        if (theme.palette?.text?.primary) rootElement.style.setProperty('--text-primary', theme.palette?.text?.primary);
        if (theme.palette?.text?.secondary) rootElement.style.setProperty('--text-secondary', theme.palette?.text?.secondary);
        if (theme.palette?.text?.contrast) rootElement.style.setProperty('--text-contrast', theme.palette?.text?.contrast);
        if (theme.palette?.text?.invert) rootElement.style.setProperty('--text-invert', theme.palette?.text?.invert);
        if (theme.palette?.text?.brand) rootElement.style.setProperty('--text-brand', theme.palette?.text?.brand);
        if (theme.palette?.text?.success) rootElement.style.setProperty('--text-success', theme.palette?.text?.success);
        if (theme.palette?.text?.info) rootElement.style.setProperty('--text-info', theme.palette?.text?.info);
        if (theme.palette?.text?.warning) rootElement.style.setProperty('--text-warning', theme.palette?.text?.warning);
        if (theme.palette?.text?.danger) rootElement.style.setProperty('--text-danger', theme.palette?.text?.danger);

        if (theme.palette?.border?.primary) rootElement.style.setProperty('--border-primary', theme.palette?.border?.primary);
        if (theme.palette?.border?.secondary) rootElement.style.setProperty('--border-secondary', theme.palette?.border?.secondary);
        if (theme.palette?.border?.tertiary) rootElement.style.setProperty('--border-tertiary', theme.palette?.border?.tertiary);
        if (theme.palette?.border?.invert) rootElement.style.setProperty('--border-invert', theme.palette?.border?.invert);
        if (theme.palette?.border?.brand) rootElement.style.setProperty('--border-brand', theme.palette?.border?.brand);
        if (theme.palette?.border?.brandContrast) rootElement.style.setProperty('--border-brand-contrast', theme.palette?.border?.brandContrast);
        if (theme.palette?.border?.success) rootElement.style.setProperty('--border-success', theme.palette?.border?.success);
        if (theme.palette?.border?.info) rootElement.style.setProperty('--border-info', theme.palette?.border?.info);
        if (theme.palette?.border?.warning) rootElement.style.setProperty('--border-warning', theme.palette?.border?.warning);
        if (theme.palette?.border?.danger) rootElement.style.setProperty('--border-danger', theme.palette?.border?.danger);
        if (theme.palette?.border?.brandOutline) rootElement.style.setProperty('--border-brand-outline', theme.palette?.border?.brandOutline);

        if (theme.palette?.icon?.primary) rootElement.style.setProperty('--border-icon-primary', theme.palette?.icon?.primary);
        if (theme.palette?.icon?.invert) rootElement.style.setProperty('--border-icon-invert', theme.palette?.icon?.invert);
        if (theme.palette?.icon?.brand) rootElement.style.setProperty('--border-icon-brand', theme.palette?.icon?.brand);

        if (theme.font?.size?.extraSmall) rootElement.style.setProperty('--font-size-extra-small', theme.font?.size?.extraSmall);
        if (theme.font?.size?.small) rootElement.style.setProperty('--font-size-small', theme.font?.size?.small);
        if (theme.font?.size?.normal) rootElement.style.setProperty('--font-size-regular', theme.font?.size?.normal);
        if (theme.font?.size?.large) rootElement.style.setProperty('---font-size-large', theme.font?.size?.large);
        if (theme.font?.size?.extraLarge) rootElement.style.setProperty('---font-size-extra-large', theme.font?.size?.extraLarge);
    };
}
