/**
 * @prettier
 */
import 'regenerator-runtime/runtime';
import { configureStore } from '@reduxjs/toolkit';
import { slice } from 'src/reducers/appReducer';

export const store = configureStore({
    reducer: {
        app: slice.reducer,
    },
    devTools: false,
    enhancers: [],
});
