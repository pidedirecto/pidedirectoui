import { isArray } from 'src/utils/array/isArray';
import { objectStoreHasData } from 'src/utils/indexedDb/objectStoreHasData';
import type { IndexedSchema } from 'src/utils/indexedDb/type/IndexedSchema';

export async function populateInitialStateInIndexedDb<State extends Record<string, any>>(
    db: IDBDatabase,
    initialState: State,
    schema: Record<string, IndexedSchema>,
    onSuccess?: Function,
): Promise<void> {
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
