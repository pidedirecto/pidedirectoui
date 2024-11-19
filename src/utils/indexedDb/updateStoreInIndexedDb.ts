export async function updateStoreInIndexedDb<T>(db: IDBDatabase, storeName: string, value: T): Promise<void> {
    return new Promise((resolve, reject) => {
        const objectStore = db.transaction('store', 'readwrite').objectStore('store');
        const request = objectStore.put({
            store: value,
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
