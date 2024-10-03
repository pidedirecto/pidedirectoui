import { useCallback, useEffect, useRef } from 'react';
import { UseIsElementVisibleInScreenProps } from 'src/types/hooks/UseIsElementVisibleInScreen';

export function useIsElementVisibleInScreen({ threshold = 1, onVisible, rootElement }: UseIsElementVisibleInScreenProps): (ref: HTMLElement) => void {
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
                    onVisible?.({ isVisible: entry.isIntersecting });
                },
                {
                    root: rootElement ?? null,
                    threshold: threshold,
                },
            );

            observerRef.current = observer;

            observer.observe(element);
        },
        [threshold],
    );

    return refInitializer;
}
