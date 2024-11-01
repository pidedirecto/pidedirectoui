import * as React from 'react';
import { Button } from 'src/components/Button';
import { createIndexedStore } from 'src/hooks/createIndexedStore';

export function App(): React.ReactElement {
    const columns = [
        {
            id: 'column1',
            content: 'Header 1',
        },
        {
            id: 'column2',
            content: 'Header 2',
        },
        {
            id: 'column3',
            content: 'Header 3',
        },
    ];
    const rows = [
        {
            key: '1',
            column1: 'Cell 1',
            column2: 'Cell 2',
            column3: 'Cell 3',
        },
        {
            key: '2',
            column1: 'Cell 4',
            column2: 'Cell 5',
            column3: 'Cell 6',
        },
        {
            key: '3',
            column1: 'Cell 7',
            column2: 'Cell 8',
            column3: 'Cell 9',
        },
    ];
    return (
        <div style={{ padding: 120 }}>
            <SelectedOrder />
            <Orders />
            <Number />
            <Actions />
        </div>
    );
}

function Actions() {
    const updateOrders = useActions((actions) => actions.updateOrders);
    const updateNumber = useActions((actions) => actions.updateNumber);
    const addOrders = useActions((actions) => actions.addOrders);

    console.log('rendering actions');

    const handleAddOrders = async () => {
        await addOrders({
            orderId: Math.random().toString(),
            name: 'some name',
        });
    };

    const handleUpdateOrder = async () => {
        await updateOrders({
            orderId: '0.1857904290897454',
            name: 'update name' + new Date().toISOString(),
        });
    };

    const handleUpdateNumber = async () => {
        await updateNumber(Math.random());
    };

    return (
        <div>
            <Button onClick={handleAddOrders}>Add order</Button>
            <Button onClick={handleUpdateOrder}>Update order</Button>
            <Button onClick={handleUpdateNumber}>Update number</Button>
        </div>
    );
}

function Orders() {
    const orders = useStore((state) => state.orders);

    const removeOrders = useActions((actions) => actions.removeOrders);
    const updateSelectedOrderId = useActions((actions) => actions.updateSelectedOrderId);

    console.log('rendering orders');

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {orders.map((order) => (
                <div key={order.orderId}>
                    <span>{order.name}</span>
                    <button onClick={() => removeOrders(order.orderId)}>remove</button>
                    <button onClick={() => updateSelectedOrderId(order.orderId)}>select</button>
                </div>
            ))}
        </div>
    );
}

function Number() {
    const number = useStore((state) => state.number);
    console.log('rendering number');

    return <span>{number}</span>;
}

function SelectedOrder() {
    const selectedOrderId = useStore((state) => state.selectedOrderId);
    console.log('rendering SelectedOrder');

    return <h1>SELECTED ORDER IS {selectedOrderId}</h1>;
}

const [useStore, useActions] = createIndexedStore<State>({
    name: 'myDB',
    version: 2,
    schema: {
        orders: {
            type: 'array',
            key: 'orderId',
        },
        number: {
            type: 'primitive',
        },
        selectedOrderId: {
            type: 'primitive',
        },
    },
    initialState: {
        orders: [],
        number: 0,
        selectedOrderId: undefined,
    },
});

type State = {
    orders: Array<{
        orderId: string;
        name: string;
    }>;
    number: number;
    selectedOrderId: string | undefined;
};
