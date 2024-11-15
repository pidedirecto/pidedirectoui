import * as React from 'react';
import { createStore } from 'src/hooks/createStore';

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
            <RegularNumber />
            <IndexedNumber />
        </div>
    );
}

function RegularNumber() {
    const number = useRegularStore((state) => state.number);

    const updateNumber = useRegularActions((actions) => actions.updateNumber);

    return (
        <div>
            <h1>Number is {number}</h1>
            <button onClick={() => updateNumber(Math.random())}>Update number</button>
        </div>
    );
}

function IndexedNumber() {
    const number = usePersistStore((state) => state.number);
    const otherNumber = useOtherPersistStore((state) => state.number);

    console.log('number = ', number);

    const updateNumber = usePersistActions((actions) => actions.updateNumber);
    const updateOtherNumber = useOtherPersistActions((actions) => actions.updateNumber);

    return (
        <div>
            <h1>Indexed number is {number}</h1>
            <h1>Second indexed number is {otherNumber}</h1>
            <button
                onClick={async () => {
                    await updateNumber(Math.random());
                    await updateOtherNumber(Math.random());
                }}
            >
                Update number
            </button>
        </div>
    );
}

const [useRegularStore, useRegularActions] = createStore<RegularState, RegularActions>({
    initialState: {
        number: 1,
        string: 'Some string',
    },
    actions: {
        updateNumber(state, number) {
            state.number = number;
        },
        updateString(state, string) {
            state.string = string;
        },
    },
});

const [usePersistStore, usePersistActions] = createStore<RegularState, RegularActions>({
    initialState: {
        number: 1,
        string: 'Some string',
    },
    actions: {
        updateNumber(state, number) {
            state.number = number;
        },
        updateString(state, string) {
            state.string = string;
        },
    },
    persist: true,
    storeName: 'test',
});

const [useOtherPersistStore, useOtherPersistActions] = createStore<RegularState, RegularActions>({
    initialState: {
        number: 1,
        string: 'Some string',
    },
    actions: {
        updateNumber(state, number) {
            state.number = number;
        },
        updateString(state, string) {
            state.string = string;
        },
    },
    persist: true,
    storeName: 'otherTest',
});

type RegularState = {
    number: number;
    string: string;
};

type RegularActions = {
    updateNumber: (number: number) => void;
    updateString: (string: string) => void;
};
