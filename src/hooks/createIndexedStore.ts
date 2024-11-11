import { useSyncExternalStore } from 'use-sync-external-store/shim';
import { type Actions, type Params, type Result } from 'src/types/hooks/CreateIndexedStore';
import { createDb } from 'src/utils/indexedDb/createDb';
import { generateIndexedDbActions } from 'src/utils/indexedDb/generateIndexedDbActions';
import { getAllObjectStoreValues } from 'src/utils/indexedDb/getAllObjectStoreValues';
import { getObjectStoreValue } from 'src/utils/indexedDb/getObjectStoreValue';
import { populateInitialStateInIndexedDb } from 'src/utils/indexedDb/populateInitialStateInIndexedDb';
import type { IndexedSchema } from 'src/utils/indexedDb/type/IndexedSchema';
import { cloneObject } from 'src/utils/object/cloneObject';

export function createIndexedStore<State>({ name, version, schema, initialState }: Params<State>): Result<State> {
    let state = cloneObject(initialState as any);
    let db: IDBDatabase | undefined = undefined;
    let actions: any = {};
    let listeners: Array<Listener> = [];

    initializeDb();

    async function initializeDb() {
        const indexedDB = window.indexedDB;
        if (!indexedDB) return;

        db = await createDb(name, version, schema);
        await populateInitialStateInIndexedDb(db, initialState as any, schema);
        state = await getDbState(db, schema);
        actions = await generateIndexedDbActions<State>(db, schema, {
            actions: ['update', 'remove', 'add'],
            onSuccess: notifyChanges,
        });
        notifyChanges();
    }

    function useStore<T>(fn: (state: State) => T): T {
        return useSyncExternalStore<T>(subscribeToStore, getSnapshotStore(fn));
    }

    function useAction<T>(fn: (actions: Actions<State>) => T): T {
        return (async (...args: Array<any>) => {
            const indexedDB = window.indexedDB;
            if (!indexedDB) throw new Error('Browser does not support indexed db');

            const action: Function = fn(actions as any) as Function;
            await action(...args);
            state = await getDbState(db as any, schema);
            notifyChanges();
        }) as any;
    }

    function subscribeToStore(listener: Listener) {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter((currentListener) => currentListener !== listener);
        };
    }

    function getSnapshotStore<T>(fn: (state: State) => T) {
        return () => fn(state as any);
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

type Listener = () => void;
