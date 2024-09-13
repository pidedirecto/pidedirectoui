import { ScreenSize, ScreenSizes } from 'src/constants/ScreenSize';
import { ScreenWidthSizes } from 'src/constants/ScreenWidthSize';

export function getScreenSize(): ScreenSize {
    if (window.innerWidth < ScreenWidthSizes.SMALL_SCREEN) return ScreenSizes.EXTRA_SMALL_SCREEN;
    if (window.innerWidth >= ScreenWidthSizes.SMALL_SCREEN && window.innerWidth < ScreenWidthSizes.MEDIUM_SCREEN) return ScreenSizes.SMALL_SCREEN;
    if (window.innerWidth >= ScreenWidthSizes.MEDIUM_SCREEN && window.innerWidth < ScreenWidthSizes.LARGE_SCREEN) return ScreenSizes.MEDIUM_SCREEN;
    return ScreenSizes.LARGE_SCREEN;
}
