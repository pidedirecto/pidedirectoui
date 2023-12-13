/**
 * @prettier
 */
import * as React from 'react';
import 'src/config/configureI18n';
import 'src/config/configureMoment';

export function App(): React.ReactElement {
    return <div style={{ fontSize: '100px', flex: 1, display: 'flex', justifyContent: 'center' }}>Hello UI</div>;
}
