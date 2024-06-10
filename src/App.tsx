/**
 * @prettier
 */

import * as React from 'react';
import { Button } from 'src/components/Button';
import { Card } from 'src/components/Card';
import { CircleIconContainer } from 'src/components/CircleIconContainer';
import { ConfirmDialog } from 'src/components/confirmDialog/ConfirmDialog';
import { useConfirmDialog } from 'src/hooks/useConfirmDialog';
import { SaveIcon } from 'src/icons/SaveIcon';

export function App(): React.ReactElement {
    const confirmDialog = useConfirmDialog();

    const handleClick = async () => {
        const confirm = await confirmDialog({ title: 'pepe' });
        console.log({ confirm });
    };

    return (
        <div style={{ padding: 120 }}>
            <ConfirmDialog />
            <Button onClick={handleClick}>pepe</Button>
            <Card>
                <CircleIconContainer>
                    <SaveIcon />
                </CircleIconContainer>
            </Card>
        </div>
    );
}
