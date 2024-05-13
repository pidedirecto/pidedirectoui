/**
 * @prettier
 */

import { RefObject, useEffect, useState } from 'react';
import { UseElementSizeResult } from 'src/types/hooks/UseElementSize';

export function useElementSize<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): UseElementSizeResult {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        function handleResize() {
            if (elementRef?.current) {
                const { width, height } = elementRef?.current.getBoundingClientRect();
                setWidth(width);
                setHeight(height);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [elementRef]);

    return { width, height };
}
