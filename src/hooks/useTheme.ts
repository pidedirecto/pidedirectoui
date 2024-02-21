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
        if (theme.palette?.primary?.border) rootElement.style.setProperty('--primaryBorderColor', theme.palette?.primary?.border);
        if (theme.palette?.primary?.disabled) rootElement.style.setProperty('--primaryDisabledColor', theme.palette?.primary?.disabled);

        if (theme.font?.color?.normal) rootElement.style.setProperty('--fontColorNormal', theme.font?.color?.normal);
        if (theme.font?.color?.light) rootElement.style.setProperty('--fontColorLight', theme.font?.color?.light);
        if (theme.font?.color?.disabled) rootElement.style.setProperty('--fontColorDisabled', theme.font?.color?.disabled);
        if (theme.font?.color?.error) rootElement.style.setProperty('--fontColorError', theme.font?.color?.error);

        if (theme.font?.size?.normal) rootElement.style.setProperty('--fontSizeNormal', theme.font?.size?.normal);
        if (theme.font?.size?.small) rootElement.style.setProperty('--fontSizeSmall', theme.font?.size?.small);
    };
}
