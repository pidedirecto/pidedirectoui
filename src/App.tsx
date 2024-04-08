/**
 * @prettier
 */

import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DropDown } from 'src/components/DropDown';
import { DropDownItem } from 'src/components/DropDownItem';
import { HelperText } from 'src/components/HelperText';
import { MultiselectableAutocomplete } from 'src/components/MultiselectableAutocomplete';
import { FoodBoxIcon } from 'src/icons/FoodBoxIcon';
import { RestoreIcon } from 'src/icons/RestoreIcon';

export function App(): React.ReactElement {
    const form = useForm();

    const [itemsSelected, setItemsSelected] = useState([]);

    const itemsFiltered = [
        { value: 'pepe', label: 'proando 1' },
        { value: 'pepo', label: 'proando 2' },
        { value: 'pepa', label: 'proando 3' },
        { value: 'papa', label: 'proando 4' },
        { value: 'pap1', label: 'proando 5' },
        { value: 'pap2', label: 'proando 6' },
        { value: 'papa3', label: 'proando 7' },
        { value: 'papa4', label: 'proando 8' },
        { value: 'pap5', label: 'proando 9' },
    ];

    const handleChange = (itemIds: any) => {
        console.log({ itemIds });
    };
    return (
        <div>
            <RestoreIcon />
            <FoodBoxIcon />
            <DropDown content={'here'}>
                <DropDownItem>
                    <div style={{ width: '100%', textAlign: 'center' }}>1283kasdjasd</div>
                </DropDownItem>
                <DropDownItem>
                    <div style={{ width: '100%', textAlign: 'center' }}>1283kasdjasd</div>
                </DropDownItem>
                <DropDownItem>12312</DropDownItem>
                <DropDownItem>12312</DropDownItem>
                <DropDownItem>azdaksmdkasmd</DropDownItem>
                <DropDownItem>sda</DropDownItem>
                <DropDownItem>asdas</DropDownItem>
            </DropDown>
            <MultiselectableAutocomplete
                name={'example'}
                selectAllOptionLabel={'seleccionar todos'}
                productsSelectedLabel={'productos seleccionados'}
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
                        }}
                    >
                        <p>{option.menuItemName}</p>
                        <HelperText>({option?.restaurantName})</HelperText>
                    </div>
                )}
                onChange={(itemIds: any) => handleChange(itemIds)}
                selectedItems={itemsSelected}
            />
        </div>
    );
}
