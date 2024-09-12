export const ScreenWidthSizes = Object.freeze({
    SMALL_SCREEN: 600,
    MEDIUM_SCREEN: 960,
    LARGE_SCREEN: 1280,
});
export type ScreenWidthSize = (typeof ScreenWidthSizes)[keyof typeof ScreenWidthSizes];
