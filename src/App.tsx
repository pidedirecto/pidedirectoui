/**
 * @prettier
 */
import * as React from 'react';
import { Checkbox } from 'src/components';

export function App(): React.ReactElement {
    return (
        <div>
            <h1>Checkbox</h1>
            <Checkbox label={'Checkbox'} name={'checkbox'} />
        </div>
    );
}
