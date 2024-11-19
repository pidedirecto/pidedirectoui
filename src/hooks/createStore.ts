import { enableMapSet, produce } from 'immer';
import { useSyncExternalStore } from 'use-sync-external-store/shim';
import type { Params, Result } from 'src/types/hooks/CreateStore';
import { createDb } from 'src/utils/indexedDb/createDb';
import { getAllObjectStoreValues } from 'src/utils/indexedDb/getAllObjectStoreValues';
import { getObjectStoreValue } from 'src/utils/indexedDb/getObjectStoreValue';
import { populateInitialStateInIndexedDb } from 'src/utils/indexedDb/populateInitialStateInIndexedDb';
import { IndexedSchema } from 'src/utils/indexedDb/type/IndexedSchema';
import { updateValueFromObjectStore } from 'src/utils/indexedDb/updateValueFromObjectStore';
import { cloneObject } from 'src/utils/object/cloneObject';
import { isObject } from 'src/utils/object/isObject';
import { wait } from 'src/utils/wait';

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

        db = await createDb(`pidedirecto-store-${params.storeName}`, 1, persistStoreSchema);
        await populateInitialStateInIndexedDb(db, initialState as State, persistStoreSchema);
        const stateInIndexedDb = (await getDbState(db, persistStoreSchema)) as State;
        state = (
            stateInIndexedDb.store
                ? {
                      ...(stateInIndexedDb.store ?? cloneObject(initialState as any)),
                  }
                : cloneObject(initialState as any)
        ) as State;
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
                    persistPromise = new PersistPromise(() => previousPersistPromise.promise.then(() => updateValueFromObjectStore(db!, 'store', state, 1)));
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

async function getDbState<State extends Record<string, any>>(db: IDBDatabase, schema: Record<string, IndexedSchema>): Promise<Record<string, any>> {
    return new Promise(async (resolve, reject) => {
        try {
            let state = {};
            for (const [objectStoreName, objectStoreSchema] of Object.entries(schema)) {
                if (objectStoreSchema.type === 'array') {
                    state = {
                        ...state,
                        [objectStoreName]: await getAllObjectStoreValues(db, objectStoreName),
                    };
                    continue;
                }
                state = {
                    ...state,
                    [objectStoreName]: await getObjectStoreValue(db, objectStoreName, 1),
                };
            }
            resolve(state);
        } catch (e) {
            reject(e);
        }
    });
}

const persistStoreSchema: Record<string, IndexedSchema> = {
    store: {
        type: 'object',
    },
};

type Listener = () => void;

class PersistPromise {
    private cancelled = false;
    public readonly promise: Promise<void>;

    constructor(asyncFunction: () => Promise<void> = () => Promise.resolve()) {
        this.promise = (async () => {
            await wait(0); // needed to wait for cancelled to be set, without this updateValueFromObjectStore will be called every time an action is used
            if (this.cancelled) return;
            await asyncFunction();
        })();
    }

    cancel(): void {
        this.cancelled = true;
    }
}
