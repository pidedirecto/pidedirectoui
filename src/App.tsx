/**
 * @prettier
 */

import * as React from 'react';
import { Card } from 'src/components/Card';
import { CircleIconContainer } from 'src/components/CircleIconContainer';
import { SaveIcon } from 'src/icons/SaveIcon';

export function App(): React.ReactElement {
    return (
        <div style={{ padding: 120 }}>
            <Card>
                <CircleIconContainer>
                    <SaveIcon />
                </CircleIconContainer>
            </Card>
        </div>
    );
}
