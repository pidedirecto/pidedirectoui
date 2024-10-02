import { useEffect } from 'react';

export function useIsElementVisibleInScreen({ element, threshold = 1, onVisible }: Props): void {
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                onVisible?.({ isVisible: entry.isIntersecting });
            },
            {
                root: null,
                threshold: threshold,
            },
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [element, threshold]);
}

type Props = {
    element: HTMLElement | null;
    threshold?: number;
    onVisible?: ({ isVisible }: { isVisible: boolean }) => void | Promise<void>;
};
