/**
 * @prettier
 */
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { history as defaultHistory } from 'src/config/history';
import { persistor } from 'src/config/store';
import reducers from 'src/reducers';

export function renderWithProviders(ui: any, { initialState, store = configureStore(initialState), history, ...renderOptions }: Props) {
    function Wrapper({ children }: any) {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Router history={history ?? defaultHistory}>{children}</Router>
                    </MuiPickersUtilsProvider>
                </PersistGate>
            </Provider>
        );
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

function configureStore(initialState = {}) {
    return createStore(reducers, initialState);
}

type Props = {
    initialState: any;
    store: any;
    history: any;
};
