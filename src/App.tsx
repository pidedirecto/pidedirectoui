/**
 * @prettier
 */

import * as React from 'react';
import { useState } from 'react';
import { Button } from 'src/components/Button';
import { Card } from 'src/components/Card';
import { CircleIconContainer } from 'src/components/CircleIconContainer';
import { ConfirmDialog } from 'src/components/ConfirmDialog';
import { SaveIcon } from 'src/icons/SaveIcon';

export function App(): React.ReactElement {
    const [confirmDialogState, setConfirmDialogState] = useState(false);

    const onCloseConfirmDialog = () => {
        setConfirmDialogState(false);
    };
    return (
        <div style={{ padding: 120 }}>
            <ConfirmDialog
                open={confirmDialogState}
                onClose={onCloseConfirmDialog}
                title={'Eliminar este objeto?'}
                buttonText={'Eliminar'}
                cancelButtonText={'Cancelar'}
                content={'Contenido de ejemplo para mostrar el dialog'}
                variant={'notification'}
            />
            <Button onClick={() => setConfirmDialogState(true)}> pepe</Button>
            <Card>
                <CircleIconContainer>
                    <SaveIcon />
                </CircleIconContainer>
            </Card>
        </div>
    );
}
