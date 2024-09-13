import { useEffect } from 'react';

export function useHasClickedOutside({ element, onClick }: Params): void {
    useEffect(() => {
        window.addEventListener('click', clickHandler);
        return () => window.removeEventListener('click', clickHandler);
    }, [element]);

    const clickHandler = (e: MouseEvent) => {
        if (!element) return false;

        onClick({ hasClickedOutside: !element.contains(e.target as any), elementClicked: e.target as any });
    };
}

type Params = {
    element: HTMLElement | void | null;
    onClick: (e: { hasClickedOutside: boolean; elementClicked: HTMLElement }) => void | Promise<void>;
};
