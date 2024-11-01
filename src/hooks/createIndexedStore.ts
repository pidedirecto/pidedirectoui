import { useSyncExternalStore } from 'use-sync-external-store/shim';
import { type Actions, type ArraySchema, type Params, type Result, type Schema } from 'src/types/hooks/CreateIndexedStore';
import { isArray } from 'src/utils/array/isArray';
import { addValueToObjectStore } from 'src/utils/indexedDb/addValueToObjectStore';
import { getAllObjectStoreValues } from 'src/utils/indexedDb/getAllObjectStoreValues';
import { getObjectStoreValue } from 'src/utils/indexedDb/getObjectStoreValue';
import { objectStoreHasData } from 'src/utils/indexedDb/objectStoreHasData';
import { removeValueFromObjectStore } from 'src/utils/indexedDb/removeValueFromObjectStore';
import { updateValueFromObjectStore } from 'src/utils/indexedDb/updateValueFromObjectStore';
import { cloneObject } from 'src/utils/object/cloneObject';
import { upperCaseFirstLetter } from 'src/utils/string/upperCaseFirstLetter';

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
        await populateInitialState(db, initialState as any, schema);
        state = await getDbState(db, schema);
        actions = await generateActions<State>(db, schema, notifyChanges);
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

async function createDb(name: string, version: number, schema: Record<string, Schema | ArraySchema>): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(name, version);
        request.onupgradeneeded = function (event) {
            const db = (event.target as IDBOpenDBRequest).result;

            for (const [objectStoreName, objectStoreSchema] of Object.entries(schema)) {
                try {
                    if (objectStoreSchema.type === 'array') {
                        db.createObjectStore(objectStoreName, { keyPath: objectStoreSchema.key });
                    } else {
                        db.createObjectStore(objectStoreName, { autoIncrement: true });
                    }
                } catch (e) {
                    // Skipping cause probably object store already exists
                }
            }
        };

        // cache database
        request.onsuccess = function (event) {
            const db = (event.target as IDBOpenDBRequest).result;
            resolve(db);
        };

        request.onerror = function (event) {
            reject((event.target as IDBOpenDBRequest).error);
        };
    });
}

async function populateInitialState<State extends Record<string, any>>(db: IDBDatabase, initialState: State, schema: Record<string, Schema | ArraySchema>): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            for (const [objectStoreName, objectStoreSchema] of Object.entries(schema)) {
                const doesObjectStoreHaveData = await objectStoreHasData(db, objectStoreName);
                // Skipping if object store already has data, that means the store already stored data offline, so we should not overwrite it
                if (doesObjectStoreHaveData) continue;

                if (objectStoreSchema.type === 'array' && !!initialState[objectStoreName]?.length) {
                    await populateArrayInitialStateObjectStore(db, objectStoreName, initialState[objectStoreName]);
                    continue;
                }
                if (objectStoreSchema.type !== 'array' && initialState[objectStoreName] !== undefined) {
                    await populateInitialStateObjectStore(db, objectStoreName, initialState[objectStoreName]);
                }
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}

async function populateArrayInitialStateObjectStore(db: IDBDatabase, objectStoreName: string, initialState: Array<any>): Promise<void> {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(objectStoreName, 'readwrite');
        transaction.oncomplete = () => resolve();
        transaction.onerror = (event) => {
            reject((event.target as IDBTransaction).error);
        };

        const objectStore = transaction.objectStore(objectStoreName);

        for (const element of initialState) {
            objectStore.add(element);
        }
    });
}

async function populateInitialStateObjectStore(db: IDBDatabase, objectStoreName: string, initialState: any): Promise<void> {
    if (isArray(initialState)) {
        throw new Error('For array initial state you should mark schema as array');
    }
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(objectStoreName, 'readwrite');
        transaction.oncomplete = () => resolve();
        transaction.onerror = (event) => {
            reject((event.target as IDBTransaction).error);
        };

        const objectStore = transaction.objectStore(objectStoreName);
        objectStore.add(initialState);
    });
}

async function getDbState<State extends Record<string, any>>(db: IDBDatabase, schema: Record<string, Schema | ArraySchema>): Promise<Record<string, any>> {
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

async function generateActions<State>(db: IDBDatabase, schema: Record<string, Schema | ArraySchema>, onSuccess: Function): Promise<Actions<State>> {
    return new Promise((resolve, reject) => {
        try {
            let actions: any = {};
            for (const [objectStoreName, objectStoreSchema] of Object.entries(schema)) {
                if (objectStoreSchema.type === 'array') {
                    actions = {
                        ...actions,
                        [`remove${upperCaseFirstLetter(objectStoreName)}`]: getRemoveElementFromArrayAction(db, objectStoreName, onSuccess),
                        [`update${upperCaseFirstLetter(objectStoreName)}`]: getUpdateElementFromArrayAction(db, objectStoreName, onSuccess),
                        [`add${upperCaseFirstLetter(objectStoreName)}`]: getAddElementToArrayAction(db, objectStoreName, onSuccess),
                    };
                    continue;
                }
                actions = {
                    ...actions,
                    [`update${upperCaseFirstLetter(objectStoreName)}`]: getUpdateAction(db, objectStoreName, onSuccess),
                };
            }
            resolve(actions);
        } catch (e) {
            reject(e);
        }
    });
}

function getRemoveElementFromArrayAction(db: IDBDatabase, objectStoreName: string, onSuccess: Function): (key: string) => Promise<void> {
    return async (key: string) => {
        await removeValueFromObjectStore(db, objectStoreName, key);
        onSuccess();
    };
}

function getUpdateElementFromArrayAction(db: IDBDatabase, objectStoreName: string, onSuccess: Function): <T>(key: string, value: T) => void {
    return async <T>(value: T) => {
        await updateValueFromObjectStore(db, objectStoreName, value);
        onSuccess();
    };
}

function getUpdateAction(db: IDBDatabase, objectStoreName: string, onSuccess: Function): <T>(value: T) => void {
    return async <T>(value: T) => {
        await updateValueFromObjectStore(db, objectStoreName, value, 1);
        onSuccess();
    };
}

function getAddElementToArrayAction(db: IDBDatabase, objectStoreName: string, onSuccess: Function): <T>(value: T) => void {
    return async <T>(value: T) => {
        await addValueToObjectStore(db, objectStoreName, value);
        onSuccess();
    };
}

type Listener = () => void;
