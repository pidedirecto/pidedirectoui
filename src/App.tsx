/**
 * @prettier
 */

import * as React from 'react';
import { Card } from 'src/components/Card';

export function App(): React.ReactElement {
    return (
        <div style={{ padding: 120 }}>
            <Card title={'titutlo'}>
                <p>hola</p>
            </Card>
        </div>
    );
}
