/**
 * @prettier
 */
import MomentUtils from '@date-io/moment';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import * as React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/named
import { Router } from 'react-router-dom';
import { App } from 'src/App';
import { history } from 'src/config/history';
import { persistor, store } from 'src/config/store';
import 'src/index.css';
import 'src/letseatfont.css';
import 'typeface-roboto';
import { PersistGate } from 'redux-persist/integration/react';

export function AppRoot(): React.ReactElement {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Router history={history}>
                        <div id='app-container'>
                            <CssBaseline />
                            <App />
                        </div>
                    </Router>
                </MuiPickersUtilsProvider>
            </PersistGate>
        </Provider>
    );
}
