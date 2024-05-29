/**
 * @prettier
 */

import * as React from 'react';
import { useState } from 'react';
import { Loader } from 'src/components/Loader';

export function App(): React.ReactElement {
    const [selectedItem, setSelectedItem] = useState<string>();

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

    const handleChange = (itemsId: string) => {
        setSelectedItem(itemsId);
    };

    const handleInputValueChange = (itemsId: string) => {
        setSelectedItem(itemsId);
    };

    return (
        <div style={{ padding: 120 }}>
            <Loader isLoading={false}> </Loader>
        </div>
    );
}
