/**
 * @prettier
 */

import { RefObject } from 'react';

export type UseElementSize = <T extends HTMLElement = HTMLElement>(containerRef: RefObject<T>) => UseElementSizeResult;

export type UseElementSizeResult = {
    width: number;
    height: number;
};
