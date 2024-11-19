export async function getStoreFromIndexedDb(db: IDBDatabase, storeName: string | number): Promise<any> {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction('store');
        const objectStore = transaction.objectStore('store');
        const request = objectStore.get(storeName);
        request.onerror = (event) => {
            reject((event.target as IDBTransaction).error);
        };
        request.onsuccess = (event) => {
            resolve(request.result?.store);
        };
    });
}
