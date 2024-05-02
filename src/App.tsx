/**
 * @prettier
 */

import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/Button';
import { Dialog } from 'src/components/Dialog';
import { DialogActions } from 'src/components/DialogActions';
import { HelperText } from 'src/components/HelperText';
import { Image } from 'src/components/Image';
import { MultiselectableAutocomplete } from 'src/components/MultiselectableAutocomplete';
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
                    Conteeeeeent
                    <DialogActions>
                        <Button variant='secondary'>Close</Button>
                        <Button>Accept</Button>
                    </DialogActions>
                </Dialog>
                <Image src={'https://images.letseat.mx/e4a9ed780b54925264e4ac45761707f0.png'} width={200} height={500} />
            </UiLogEventTracker>

            <MultiselectableAutocomplete
                name={'example'}
                selectAllOption
                selectAllOptionLabel={'seleccionar todos'}
                productsSelectedLabel={`${selectedItems.length} productos seleccionados`}
                data={itemsFiltered}
                getOptionValue={(option) => option.value}
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '8px 4px',
                            gap: '12px',
                        }}
                    >
                        <p>{option.label}</p>
                        <HelperText>{option?.restaurantName}</HelperText>
                    </div>
                )}
                onChange={(itemIds: any) => handleChange(itemIds)}
                value={selectedItems}
                variant={'verbose'}
            />
        </div>
    );
}
