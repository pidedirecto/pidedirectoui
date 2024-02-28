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

        if (theme.palette?.primary?.color) rootElement.style.setProperty('--primaryColor', theme.palette?.primary?.color);
        if (theme.palette?.primary?.hover) rootElement.style.setProperty('--primaryHover', theme.palette?.primary?.hover);
        if (theme.palette?.primary?.outline) rootElement.style.setProperty('--primaryOutline', theme.palette?.primary?.outline);
        if (theme.palette?.primary?.border) rootElement.style.setProperty('--primaryBorderColor', theme.palette?.primary?.border);
        if (theme.palette?.primary?.disabled) rootElement.style.setProperty('--primaryDisabledColor', theme.palette?.primary?.disabled);

        if (theme.palette?.secondary?.color) rootElement.style.setProperty('--secondaryColor', theme.palette?.secondary?.color);
        if (theme.palette?.secondary?.hover) rootElement.style.setProperty('--secondaryHover', theme.palette?.secondary?.hover);
        if (theme.palette?.secondary?.outline) rootElement.style.setProperty('--secondaryOutline', theme.palette?.secondary?.outline);
        if (theme.palette?.secondary?.border) rootElement.style.setProperty('--secondaryBorderColor', theme.palette?.secondary?.border);
        if (theme.palette?.secondary?.disabled) rootElement.style.setProperty('--secondaryDisabledColor', theme.palette?.secondary?.disabled);

        if (theme.palette?.outline?.color) rootElement.style.setProperty('--outlineColor', theme.palette?.outline?.color);
        if (theme.palette?.outline?.hover) rootElement.style.setProperty('--outlineHover', theme.palette?.outline?.hover);
        if (theme.palette?.outline?.outline) rootElement.style.setProperty('--outlineOutline', theme.palette?.outline?.outline);
        if (theme.palette?.outline?.border) rootElement.style.setProperty('--outlineBorderColor', theme.palette?.outline?.border);
        if (theme.palette?.outline?.disabled) rootElement.style.setProperty('--outlineDisabledColor', theme.palette?.outline?.disabled);

        if (theme.font?.color?.normal) rootElement.style.setProperty('--fontColorNormal', theme.font?.color?.normal);
        if (theme.font?.color?.light) rootElement.style.setProperty('--fontColorLight', theme.font?.color?.light);
        if (theme.font?.color?.disabled) rootElement.style.setProperty('--fontColorDisabled', theme.font?.color?.disabled);
        if (theme.font?.color?.error) rootElement.style.setProperty('--fontColorError', theme.font?.color?.error);
        if (theme.font?.color?.hover) rootElement.style.setProperty('--fontHoverColor', theme.font?.color?.hover);

        if (theme.font?.size?.normal) rootElement.style.setProperty('--fontSizeNormal', theme.font?.size?.normal);
        if (theme.font?.size?.small) rootElement.style.setProperty('--fontSizeSmall', theme.font?.size?.small);
        if (theme.font?.size?.large) rootElement.style.setProperty('---fontSizeLarge', theme.font?.size?.large);
    };
}
