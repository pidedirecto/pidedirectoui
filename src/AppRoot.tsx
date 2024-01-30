/**
 * @prettier
 */
import * as React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/named
import { App } from 'src/App';
import { store } from 'src/config/store';
import 'src/index.css';
import 'src/letseatfont.css';

export function AppRoot(): React.ReactElement {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
