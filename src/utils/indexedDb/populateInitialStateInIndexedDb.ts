import { createStoreInIndexedDb } from 'src/utils/indexedDb/createStoreInIndexedDb';
import { getStoreFromIndexedDb } from 'src/utils/indexedDb/getStoreFromIndexedDb';

export async function populateInitialStateInIndexedDb<State extends Record<string, any>>(db: IDBDatabase, storeName: string, initialState: State): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            const store = await getStoreFromIndexedDb(db, storeName);
            if (store) return;

            await createStoreInIndexedDb(db, storeName, initialState);
            resolve();
        } catch (e) {
            reject(e);
        }
    });
}
