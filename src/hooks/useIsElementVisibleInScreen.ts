import { useCallback, useEffect, useRef } from 'react';

export function useIsElementVisibleInScreen({ threshold = 1, onVisible }: Props): (ref: HTMLElement) => void {
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
                    root: null,
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

type Props = {
    threshold?: number;
    onVisible?: ({ isVisible }: { isVisible: boolean }) => void | Promise<void>;
};
