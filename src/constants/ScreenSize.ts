/**
 * @prettier
 */
export const ScreenSizes = Object.freeze({
    EXTRA_SMALL_SCREEN: 'EXTRA_SMALL_SCREEN',
    SMALL_SCREEN: 'SMALL_SCREEN',
    MEDIUM_SCREEN: 'MEDIUM_SCREEN',
    LARGE_SCREEN: 'LARGE_SCREEN',
});
export type ScreenSize = (typeof ScreenSizes)[keyof typeof ScreenSizes];
