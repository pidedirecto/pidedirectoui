/**
 * @prettier
 */

export type ContainerRef = { current: void | HTMLDivElement };

export type UseElementSizeResult = {
    width: number;
    height: number;
};

export type UseElementSize = (containerRef: ContainerRef) => UseElementSizeResult;
