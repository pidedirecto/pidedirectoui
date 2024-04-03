/**
 * @prettier
 */

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { DropDown } from 'src/components/DropDown';
import { DropDownItem } from 'src/components/DropDownItem';
import { VirtualizedList } from 'src/components/VirtualizedList';
import { FoodBoxIcon } from 'src/icons/FoodBoxIcon';
import { RestoreIcon } from 'src/icons/RestoreIcon';

export function App(): React.ReactElement {
    const form = useForm();

    const itemsFiltered = [{ value: 'pepe' }, { value: 'pepo' }, { value: 'pepa' }, { value: 'papa' }, { value: 'pap1' }, { value: 'pap2' }, { value: 'papa3' }, { value: 'papa4' }, { value: 'pap5' }];

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
            <VirtualizedList height={120} itemSize={20}>
                {itemsFiltered.map((item, idx) => (
                    <div key={item.value}>{item.value}</div>
                ))}
            </VirtualizedList>
        </div>
    );
}
