/**
 * @prettier
 */

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { DropDown } from 'src/components/DropDown';
import { DropDownItem } from 'src/components/DropDownItem';

export function App(): React.ReactElement {
    const form = useForm();
    return (
        <div>
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
        </div>
    );
}
