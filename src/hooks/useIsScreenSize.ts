import { useEffect, useState } from 'react';
import { ScreenSize } from 'src/constants/ScreenSize';
import { isArray } from 'src/utils/array/isArray';
import { getScreenSize } from 'src/utils/window/getScreenSize';

export function useIsScreenSize(screenSize: ScreenSize | Array<ScreenSize>): boolean {
    const [isScreenSize, setIsScreenSize] = useState(getIsScreenSize(screenSize));

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            return window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        setIsScreenSize(getIsScreenSize(screenSize));
    };

    return isScreenSize;
}

function getIsScreenSize(screenSize: ScreenSize | Array<ScreenSize>) {
    if (isArray(screenSize)) {
        return screenSize.includes(getScreenSize());
    }

    return screenSize === getScreenSize();
}
