/**
 * @prettier
 */
import { useEffect, useState } from 'react';
import { ContainerRef, UseElementSizeResult } from 'src/types/hooks/UseElementSize';

export function useElementSize(containerRef: ContainerRef): UseElementSizeResult {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        function handleResize() {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setWidth(width);
                setHeight(height);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [containerRef]);

    return { width, height };
}
