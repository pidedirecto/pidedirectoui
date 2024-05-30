/**
 * @prettier
 */

import * as React from 'react';
import { Loader } from 'src/components/Loader';

export function App(): React.ReactElement {
    return (
        <div style={{ padding: 120 }}>
            <h1>App</h1>
            <Loader loading={true} />
        </div>
    );
}
