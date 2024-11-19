import { type Params, type Result } from 'src/types/hooks/CreateIndexedDb';
import { createDb } from 'src/utils/indexedDb/createDb';
import { getStoreFromIndexedDb } from 'src/utils/indexedDb/getStoreFromIndexedDb';
import { populateInitialStateInIndexedDb } from 'src/utils/indexedDb/populateInitialStateInIndexedDb';
import { IndexedSchema } from 'src/utils/indexedDb/type/IndexedSchema';
import { updateStoreInIndexedDb } from 'src/utils/indexedDb/updateStoreInIndexedDb';
import { cloneObject } from 'src/utils/object/cloneObject';
import { removeNulls } from 'src/utils/object/removeNulls';
import { PersistPromise } from 'src/utils/promise/PersistPromise';
import { upperCaseFirstLetter } from 'src/utils/string/upperCaseFirstLetter';

export function createIndexedDb<State extends Record<string, any>>({ name, initialState }: Params<State>): Result<State> {
    let persistPromise: PersistPromise = new PersistPromise();
    let state: Record<string, any> = {} as any;
    let db: IDBDatabase | undefined = undefined;

    initializeDb();

    async function initializeDb() {
        const indexedDB = window.indexedDB;
        if (!indexedDB) return;

        db = await createDb('pidedirecto', 1, indexedDbSchema);
        await populateInitialStateInIndexedDb(db, name, initialState);
        state = (await getStoreFromIndexedDb(db, name)) ?? cloneObject(initialState);
    }

    function createActions() {
        let actions: any = {};
        for (const stateKey of Object.keys(initialState)) {
            const updateActionKey = `update${upperCaseFirstLetter(stateKey)}`;
            const getActionKey = `get${upperCaseFirstLetter(stateKey)}`;
            actions = removeNulls({
                ...actions,
                [updateActionKey]: (newValue: any) => {
                    state[stateKey] = newValue;
                    const previousPersistPromise = persistPromise;
                    previousPersistPromise.cancel();
                    persistPromise = new PersistPromise(() => previousPersistPromise.promise.then(() => updateStoreInIndexedDb(db!, name, state)));
                },
                [getActionKey]: () => {
                    return state[stateKey];
                },
            });
        }
        return actions;
    }

    return createActions();
}

const indexedDbSchema: Record<string, IndexedSchema> = {
    store: {
        type: 'array',
        key: '__storeName',
    },
};
