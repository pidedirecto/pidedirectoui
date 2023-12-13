/**
 * @prettier
 */
import { createSlice } from 'redux-starter-kit';

export const appReducer: {
    reducer: any;
    actions: Actions;
} = createSlice({
    name: 'appReducer',
    initialState: {} as AppState,
    reducers: {},
});

export type AppState = {};

export type Actions = {};
