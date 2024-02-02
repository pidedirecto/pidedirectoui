/**
 * @prettier
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/named
import { App } from 'src/App';
import { store } from 'src/config/store';
import 'src/index.css';
import 'src/letseatfont.css';

function Main(): React.ReactElement {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));
