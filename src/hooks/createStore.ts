import { enableMapSet, produce } from 'immer';
import { useSyncExternalStore } from 'use-sync-external-store/shim';
import type { Params, Result } from 'src/types/hooks/CreateStore';
import { createDb } from 'src/utils/indexedDb/createDb';
import { getStoreFromIndexedDb } from 'src/utils/indexedDb/getStoreFromIndexedDb';
import { populateInitialStateInIndexedDb } from 'src/utils/indexedDb/populateInitialStateInIndexedDb';
import { IndexedSchema } from 'src/utils/indexedDb/type/IndexedSchema';
import { updateStoreInIndexedDb } from 'src/utils/indexedDb/updateStoreInIndexedDb';
import { cloneObject } from 'src/utils/object/cloneObject';
import { isObject } from 'src/utils/object/isObject';
import { PersistPromise } from 'src/utils/promise/PersistPromise';

enableMapSet();

export function createStore<State extends Record<string, any>, Actions>(params: Params<State, Actions>): Result<State, Actions> {
    const { initialState, actions, persist } = params;
    if (!isObject(initialState)) {
        console.error('initialState passed to createStore function is not an object');
    }

    let db: IDBDatabase | undefined = undefined;
    let state: State = cloneObject(initialState as any);
    let listeners: Array<Listener> = [];
    let persistPromise: PersistPromise = new PersistPromise();

    if (persist) initializeDb();

    async function initializeDb() {
        const indexedDB = window.indexedDB;
        if (!indexedDB || !persist) return;
        db = await createDb('pidedirecto', 1, persistStoreSchema);
        await populateInitialStateInIndexedDb(db, params.storeName, initialState);
        const stateInDb = await getStoreFromIndexedDb(db, params.storeName);
        state = (stateInDb ?? cloneObject(initialState as any)) as State;
        notifyChanges();
    }

    function useStore<T>(fn: (state: State) => T): T {
        return useSyncExternalStore<T>(subscribeToStore, getSnapshotStore(fn));
    }

    function useAction<T extends (...args: Array<any>) => any>(fn: (actions: Actions) => T): T {
        const action = fn(actions as any);

        if (persist) {
            return ((...args: Array<any>) => {
                state = produce(state, (draft) => action(draft as any, ...args));
                notifyChanges();
                if (db) {
                    const previousPersistPromise = persistPromise;
                    previousPersistPromise.cancel();
                    persistPromise = new PersistPromise(() => previousPersistPromise.promise.then(() => updateStoreInIndexedDb(db!, params.storeName, state)));
                }
            }) as T;
        }

        return ((...args: Array<any>) => {
            state = produce(state, (draft) => action(draft as any, ...args));
            notifyChanges();
        }) as T;
    }

    function subscribeToStore(listener: Listener) {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter((currentListener) => currentListener !== listener);
        };
    }

    function getSnapshotStore<T>(fn: (state: State) => T) {
        return () => fn(state);
    }

    function notifyChanges() {
        listeners.forEach((listener) => listener());
    }

    return [useStore, useAction];
}

const persistStoreSchema: Record<string, IndexedSchema> = {
    store: {
        type: 'array',
        key: '__storeName',
    },
};

type Listener = () => void;
