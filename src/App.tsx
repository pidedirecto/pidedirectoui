/**
 * @prettier
 */

import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/Button';
import { Dialog } from 'src/components/Dialog';
import { DialogActions } from 'src/components/DialogActions';
import { DialogContent } from 'src/components/DialogContent';
import { Select } from 'src/components/Select';
import { Text } from 'src/components/Text';
import { UiLogEventTracker } from 'src/components/UiLogEventTracker';

export function App(): React.ReactElement {
    const form = useForm();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

    const itemsFiltered = [
        { value: 'value1', label: 'Example 1' },
        { value: 'value2', label: 'Example 2' },
        { value: 'value3', label: 'Example 3' },
        { value: 'value4', label: 'Example 4' },
        { value: 'value5', label: 'Example 5' },
        { value: 'value6', label: 'Example 6' },
        { value: 'value7', label: 'Example 7' },
        { value: 'value8', label: 'Example 8' },
        { value: 'value9', label: 'Example 9', restaurantName: 'popeye' },
    ];

    const handleChange = (itemsId: Array<string>) => {
        setSelectedItems(itemsId);
    };

    return (
        <div style={{ padding: 120 }}>
            <UiLogEventTracker id='page' onInteract={console.log}>
                <Button onClick={() => setDialogOpen(!dialogOpen)}>open</Button>
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} loading title='Hiii im a title'>
                    <DialogContent>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Select options={itemsFiltered} value='1' name='select' />
                    </DialogContent>
                    <DialogActions>
                        <Button variant='secondary'>Close</Button>
                        <Button>Accept</Button>
                    </DialogActions>
                </Dialog>
                <Select options={itemsFiltered} value='1' name='select' />
            </UiLogEventTracker>
        </div>
    );
}
