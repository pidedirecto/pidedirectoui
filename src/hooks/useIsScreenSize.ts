import { useEffect, useState } from 'react';
import { ScreenSize } from 'src/constants/ScreenSize';
import { isArray } from 'src/utils/array/isArray';
import { getScreenSize } from 'src/utils/window/getScreenSize';

export function useIsScreenSize(screenSize: ScreenSize | Array<ScreenSize>): boolean {
    const [isScreenSize, setIsScreenSize] = useState(screenSize === getScreenSize());

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            return window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        setIsScreenSize(getIsScreenSize());
    };

    const getIsScreenSize = () => {
        if (isArray(screenSize)) {
            return screenSize.includes(getScreenSize());
        }

        return screenSize === getScreenSize();
    };

    return isScreenSize;
}
