import type { IndexedSchema } from 'src/utils/indexedDb/type/IndexedSchema';

export async function createDb(name: string, version: number, schema: Record<string, IndexedSchema>): Promise<IDBDatabase> {
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
