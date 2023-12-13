/**
 * @prettier
 */
export const ScreenSizes = Object.freeze({
    SMALL_SCREEN: 600,
    MEDIUM_SCREEN: 960,
    LARGE_SCREEN: 1280,
});
export type ScreenSize = (typeof ScreenSizes)[keyof typeof ScreenSizes];
