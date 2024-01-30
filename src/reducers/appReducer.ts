/**
 * @prettier
 */
import { createSlice } from '@reduxjs/toolkit';

export const slice: {
    reducer: any;
    actions: Actions;
} = createSlice({
    name: 'appReducer',
    initialState: {} as AppState,
    reducers: {},
});

export const actions = slice.actions;

export type AppState = {};

export type Actions = {};
