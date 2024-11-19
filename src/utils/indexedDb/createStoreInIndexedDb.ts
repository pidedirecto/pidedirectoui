export async function createStoreInIndexedDb<T>(db: IDBDatabase, storeName: string, initialState: T): Promise<void> {
    return new Promise((resolve, reject) => {
        const objectStore = db.transaction('store', 'readwrite').objectStore('store');
        const request = objectStore.add({
            store: initialState,
            __storeName: storeName,
        });

        request.onsuccess = (event) => {
            resolve();
        };

        request.onerror = () => {
            reject(request.error);
        };
    });
}
