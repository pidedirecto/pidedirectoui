/**
 * @prettier
 */

import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/Button';
import { Dialog } from 'src/components/Dialog';
import { DialogActions } from 'src/components/DialogActions';
import { Image } from 'src/components/Image';
import { UiLogEventTracker } from 'src/components/UiLogEventTracker';

export function App(): React.ReactElement {
    const form = useForm();

    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div>
            <UiLogEventTracker id='page' onInteract={console.log}>
                <Button onClick={() => setDialogOpen(!dialogOpen)}>open</Button>
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} loading title='Hiii im a title'>
                    Conteeeeeent
                    <DialogActions>
                        <Button variant='secondary'>Close</Button>
                        <Button>Accept</Button>
                    </DialogActions>
                </Dialog>
                <Image src={'https://images.letseat.mx/e4a9ed780b54925264e4ac45761707f0.png'} width={200} height={500} />
            </UiLogEventTracker>
        </div>
    );
}
