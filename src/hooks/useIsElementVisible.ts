import { useCallback, useEffect, useRef } from 'react';
import { UseIsElementVisibleProps } from 'src/types/hooks/UseIsElementVisible';

export function useIsElementVisible({ threshold = 1, onVisible, onHidden, rootElement, dependencies }: UseIsElementVisibleProps): (ref: HTMLElement) => void {
    const elementRef = useRef<HTMLElement>();
    const observerRef = useRef<IntersectionObserver>();

    useEffect(() => {
        return () => {
            if (elementRef.current) {
                observerRef.current?.unobserve(elementRef.current);
            }
        };
    }, []);

    const refInitializer = useCallback(
        (element: HTMLElement | null) => {
            if (!element) return;
            elementRef.current = element;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        onVisible?.();
                    } else {
                        onHidden?.();
                    }
                },
                {
                    root: rootElement ?? null,
                    threshold: threshold,
                },
            );

            observerRef.current = observer;

            observer.observe(element);
        },
        [threshold, ...(dependencies ?? [])],
    );

    return refInitializer;
}
