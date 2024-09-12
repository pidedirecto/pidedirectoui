import * as React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/named
import { App } from 'src/App';
import 'src/index.css';
import 'src/letseatfont.css';

function Main(): React.ReactElement {
    return <App />;
}

ReactDOM.render(<Main />, document.getElementById('root'));
