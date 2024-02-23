/**
 * @prettier
 */

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox } from 'src/components/Checkbox';
import { UiLogEventTracker } from 'src/components/UiLogEventTracker';

export function App(): React.ReactElement {
    const form = useForm();
    return (
        <div>
            <h1>Checkbox</h1>
            <UiLogEventTracker id={'here1'} onInteract={console.log}>
                <Checkbox name={'asdas1'} label={'asda123123sda'} helperText={'this is helper text'} />
            </UiLogEventTracker>
            <hr />
            <UiLogEventTracker id={'here2'} onInteract={console.log}>
                <Checkbox name={'asdas2'} label={'asdasda'} helperText={'this is helper text'} />
            </UiLogEventTracker>
        </div>
    );
}
