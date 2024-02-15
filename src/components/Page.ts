/**
 * @prettier
 */
import { createContext } from 'react';

//TODO: Implement Page component

export const PageContext = createContext<PageContextState>({
    stackTrace: '',
    addElementToStackTrace: () => {},
    clearStackTrace: () => {},
});

export type PageContextState = {
    stackTrace: string;
    addElementToStackTrace: () => void;
    clearStackTrace: () => void;
    pageSessionId?: string;
    setPageSessionId?: () => void;
};
