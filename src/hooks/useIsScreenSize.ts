/**
 * @prettier
 */
import { useEffect, useState } from 'react';
import { ScreenSize } from 'src/constants/ScreenSize';
import { getScreenSize } from 'src/utils/window/getScreenSize';

export function useIsScreenSize(screenSize: ScreenSize): boolean {
    const [isScreenSize, setIsScreenSize] = useState(screenSize === getScreenSize());

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            return window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        setIsScreenSize(screenSize === getScreenSize());
    };

    return isScreenSize;
}
