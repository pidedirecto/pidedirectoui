import * as React from 'react';
import { createStore } from 'src/hooks/createStore';

export function CreatePersistStorePlayground(): React.ReactElement {
    return (
        <>
            <h1>CreatePersistStorePlayground</h1>
            <RegularNumber />
            <IndexedNumber />
        </>
    );
}

function RegularNumber() {
    const number = useRegularStore((state) => state.number);

    const updateNumber = useRegularActions((actions) => actions.updateNumber);

    return (
        <div>
            <h3>Number is {number}</h3>
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
            <h3>Indexed number is {number}</h3>
            <h3>Second indexed number is {otherNumber}</h3>
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
