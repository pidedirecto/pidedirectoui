/**
 * @prettier
 */

import * as React from 'react';
import { Card } from 'src/components/Card';
import { CircleContainer } from 'src/components/CircleContainer';
import { SaveIcon } from 'src/icons/SaveIcon';

export function App(): React.ReactElement {
    return (
        <div style={{ padding: 120 }}>
            <Card>
                <CircleContainer>
                    <SaveIcon />
                </CircleContainer>
            </Card>
        </div>
    );
}
