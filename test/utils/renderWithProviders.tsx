/**
 * @prettier
 */
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { slice } from 'src/reducers/appReducer';

export function renderWithProviders(ui: any, { initialState, history, ...renderOptions }: Props) {
    const store = configureStore({
        reducer: {
            app: slice.reducer,
        },
        preloadedState: initialState,
        devTools: false,
        enhancers: [],
    });

    function Wrapper({ children }: any) {
        return <Provider store={store}>{children}</Provider>;
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

type Props = {
    initialState: any;
    store: any;
    history: any;
};
